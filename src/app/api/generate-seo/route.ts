import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY ?? "" });

interface SEOResponse {
  title: string;
  description: string;
  error?: string;
}

/**
 * POST handler pour la génération automatique d'un titre SEO et d'une meta description.
 * 
 * Cette route API :
 * 1. Reçoit un contenu texte depuis le client
 * 2. Valide que le contenu est bien une chaîne non vide
 * 3. Appelle le modèle OpenAI pour générer un titre SEO et une meta description optimisés
 * 4. Retourne ces données au format JSON
 * 
 * @param request - L'objet `NextRequest` représentant la requête entrante
 * @returns {Promise<NextResponse<SEOResponse>>} - Réponse JSON contenant `title` et `description`
 */
export async function POST(request: NextRequest): Promise<NextResponse<SEOResponse>> {
  try {
    // Lecture et parsing du corps JSON de la requête
    const body = await request.json();
    const content = body.content;

    // Validation du contenu : il doit être une chaîne non vide
    if (typeof content !== "string" || content.trim() === "") {
      return NextResponse.json(
        { title: "", description: "", error: "Content is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    /**
     * Appel à l'API OpenAI pour générer le titre et la description.
     * On force un format strict :
     * Titre: ...
     * Description: ...
     */
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Tu es un expert SEO. Réponds STRICTEMENT au format suivant sans texte supplémentaire :\n" +
            "Titre: <ton titre optimisé>\n" +
            "Description: <ta meta description optimisée>"
        },
        {
          role: "user",
          content: `Voici le contenu : ${content}`
        }
      ],
      max_tokens: 150, // Tokens suffisants pour éviter une réponse tronquée
      temperature: 0.7 // Un peu de créativité tout en restant pertinent
    });

    // Récupération du texte généré par OpenAI
    const text = completion.choices?.[0]?.message?.content ?? "";

    // Extraction du titre et de la description via regex
    const titleMatch = text.match(/Titre:\s*(.+)/i);
    const descriptionMatch = text.match(/Description:\s*(.+)/i);

    // Si non trouvé, on utilise une valeur par défaut
    const title = titleMatch?.[1]?.trim() || "Titre par défaut";
    const description = descriptionMatch?.[1]?.trim() || "Description par défaut";

    // Réponse JSON avec les données SEO générées
    return NextResponse.json({ title, description }, { status: 200 });
  } catch (error) {
    // Log serveur pour déboguer
    console.error("Erreur SEO:", error);

    // Réponse en cas d'erreur serveur
    return NextResponse.json(
      { title: "", description: "", error: "Erreur serveur lors de la génération SEO" },
      { status: 500 }
    );
  }
}
