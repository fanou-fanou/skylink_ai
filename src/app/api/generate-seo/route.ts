import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY ?? "" });

interface SEOResponse {
  title: string;
  description: string;
  error?: string;
}

/**
 * Handler POST pour la génération SEO.
 * 
 * Cette route API reçoit un contenu textuel, l'envoie au modèle OpenAI pour générer :
 * - Un **titre SEO** concis et optimisé
 * - Une **meta description** claire et engageante
 * 
 * ## Processus :
 * 1. Lecture et validation du `content` envoyé dans le corps de la requête
 * 2. Appel à l'API OpenAI avec des instructions précises pour la génération
 * 3. Extraction du titre et de la description à partir de la réponse
 * 4. Retour des données SEO au format JSON
 * 
 * ## Codes de réponse :
 * - **200** : Succès avec titre et description générés
 * - **400** : Erreur de validation (contenu absent ou invalide)
 * - **500** : Erreur interne lors de l'appel ou du traitement
 * 
 * @param request - Objet `NextRequest` représentant la requête entrante
 * @returns {Promise<NextResponse<SEOResponse>>} Réponse JSON contenant le titre et la description SEO
 */
export async function POST(request: NextRequest): Promise<NextResponse<SEOResponse>> {
  try {
    // Récupération et parsing du corps JSON
    const body = await request.json();
    const content = body.content;

    // Validation du contenu
    if (typeof content !== "string" || content.trim() === "") {
      return NextResponse.json(
        { title: "", description: "", error: "Content is required and must be a non-empty string" },
        { status: 400 }
      );
    }

    // Appel au modèle OpenAI pour générer les données SEO
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Tu es un expert SEO qui génère un titre et une description concis pour une page web."
        },
        {
          role: "user",
          content: `Génère un titre SEO et une meta description pour ce contenu : ${content}`
        }
      ],
      max_tokens: 60,
    });

    // Extraction du texte de la réponse
    const text = completion.choices?.[0]?.message?.content ?? "";

    // Extraction du titre et de la description avec Regex
    const titleMatch = text.match(/Titre:\s*(.+)/i);
    const descriptionMatch = text.match(/Description:\s*(.+)/i);

    const title = titleMatch ? titleMatch[1].trim() : "Titre par défaut";
    const description = descriptionMatch ? descriptionMatch[1].trim() : "Description par défaut";

    // Réponse JSON avec les données SEO
    return NextResponse.json({ title, description }, { status: 200 });
  } catch {
    // Gestion des erreurs internes
    return NextResponse.json(
      { title: "", description: "", error: "Erreur serveur lors de la génération SEO" },
      { status: 500 }
    );
  }
}
