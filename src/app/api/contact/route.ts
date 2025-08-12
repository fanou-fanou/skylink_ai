import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const contactSchema = z.object({
  fullname: z.string().min(3),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

// Init Supabase client (mets tes variables d’env en .env.local)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // Insert dans Supabase
    const { error } = await supabase.from("contacts").insert([data]);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Envoi notification Slack via webhook (optionnel)
    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `Nouveau message de contact:\nNom: ${data.fullname}\nEmail: ${data.email}\nObjet: ${data.subject}\nMessage: ${data.message}`,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    let message = "Invalid data";
    if (err instanceof Error) {
      message = err.message;
    }
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
