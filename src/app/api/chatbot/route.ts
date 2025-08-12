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
          content: `Tu es un assistant qui répond uniquement à partir de la FAQ ci-dessous.
- Fais correspondre les questions même si elles contiennent des fautes d'orthographe, accents manquants ou formulation différente.
- Ignore la casse, les accents et la ponctuation.
- Si la question correspond approximativement à une FAQ, donne la réponse exacte.
- Si aucune correspondance, réponds "Je n'ai pas cette information dans la FAQ".`,
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
