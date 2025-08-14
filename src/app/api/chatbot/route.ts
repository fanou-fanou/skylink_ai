import { NextResponse } from "next/server";
import OpenAI from "openai";
import { frequentlyAskedQuestions } from "@/lib/faq";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Petite fonction pour nettoyer et normaliser le texte avant envoi à l'IA
function normalizeText(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // supprime accents
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "") // supprime caractères spéciaux
    .trim();
}

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json({ error: "Question manquante" }, { status: 400 });
    }

    const userQuestion = normalizeText(question);

    const context = frequentlyAskedQuestions
      .map(f => `Q: ${normalizeText(f.question)}\nR: ${f.answer}`)
      .join("\n\n");

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Tu es un assistant qui répond uniquement à partir de la FAQ fournie ci-dessous.

Identifie la question de l’utilisateur même si elle comporte des fautes d’orthographe, des accents manquants, de la casse différente, une ponctuation absente, ou une formulation reformulée.

Utilise une correspondance approximative (fuzzy matching) pour trouver la question la plus proche dans la FAQ.

Si une correspondance est trouvée, renvoie exactement la réponse indiquée dans la FAQ, sans reformulation ni ajout.

Si aucune correspondance n’est trouvée, réponds : "Je n'ai pas cette information dans la FAQ".

Si l’utilisateur continue de discuter ou pose des questions liées après une réponse, improvise à partir des informations déjà données, mais ne donne pas de données extérieures à la FAQ.`,
        },
        { role: "system", content: context },
        { role: "user", content: userQuestion },
      ],
      max_tokens: 150,
      temperature: 0, // pour éviter les variations inutiles
    });

    return NextResponse.json({ answer: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
