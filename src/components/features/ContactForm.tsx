"use client"

import { useState } from "react";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";

const contactSchema = z.object({
    fullname: z.string().min(3, { message: "Le nom complet doit contenir au moins 3 caractères." }),
    email: z.string().email({ message: "Adresse e-mail invalide." }),
    subject: z.string().min(3, { message: "L'objet doit contenir au moins 3 caractères." }),
    message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        fullname: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        // Clear error on change
        setErrors(prev => ({
            ...prev,
            [e.target.name]: undefined,
        }));
    };

   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const result = contactSchema.safeParse(formData);

  if (!result.success) {
    const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
    result.error.issues.forEach(err => {
      if (err.path[0]) {
        const key = err.path[0] as keyof ContactFormData;
        fieldErrors[key] = err.message;
      }
    });
    setErrors(fieldErrors);
    return;
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const json = await res.json();

    if (!res.ok) throw new Error(json.error || "Erreur serveur");

    toast.success("Message envoyé avec succès !");
    setFormData({ fullname: "", email: "", subject: "", message: "" });
    setErrors({});
  } catch {
      toast.error("Erreur lors de l'envoi");
    }
  };


    return (
      <>
          <form className="relative" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row">
                <div className="mt-3 p-5 w-full">
                    <label htmlFor="fullname" className="font-semibold">
                        Nom Complet:{" "}
                    </label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        autoComplete="off"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="mt-3 w-full border-b border-white p-2 text-lg"
                    />
                    {errors.fullname && (
                        <p className="mt-1 text-sm text-red-500 italic">{errors.fullname}</p>
                    )}
                </div>
                <div className="mt-3 p-5 w-full">
                    <label htmlFor="email" className="font-semibold">
                        Adresse E-mail:{" "}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-3 w-full border-b border-white p-2 text-lg"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500 italic">{errors.email}</p>
                    )}
                </div>
            </div>
            <div className="mt-3 p-5">
                <label htmlFor="subject" className="font-semibold">
                    Objet:{" "}
                </label>
                <input
                    type="text"
                    id="subject"
                    autoComplete="off"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-3 w-full border-b border-white p-2 text-lg"
                />
                {errors.subject && (
                    <p className="mt-1 text-sm text-red-500 italic">{errors.subject}</p>
                )}
            </div>
            <div className="mt-3 p-5">
                <label htmlFor="message" className="font-semibold text-primary">
                    Message:{" "}
                </label>
                <textarea
                    name="message"
                    rows={10}
                    autoComplete="off"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-3 w-full border-b border-primary p-2 text-lg"
                ></textarea>
                {errors.message && (
                    <p className="mt-1 text-sm text-red-500 italic">{errors.message}</p>
                )}
            </div>
            <div className="mt-3 p-5">
                {/* <Button type="submit" className="font-semibold text-white">
                    
                </Button> */}
                <button type="submit" className="px-5 transition-colors duration-200 cursor-pointer py-2 rounded-md font-semibold text-white bg-primary hover:bg-primary/80">Envoyer</button>
            </div>
        </form>
        <Toaster position="bottom-left" />
      </>
    );
}
