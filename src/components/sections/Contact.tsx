import Image from "next/image"
import ellipse_spread from "@/assets/images/ellipse_spread.svg";

import { Button } from "../ui/Button";
import { contact } from "@/lib/data";

export default function Contact() {
    return (
        <section id="contact" className="relative pt-10 w-full h-full">
            <Image src={ellipse_spread} alt="ellipse spread" className="w-full rounded-[100%] blur-3xl h-full top-40 absolute  object-cover "  />
            <div className="container mx-auto py-30 px-8 text-center relative z-10 pb-20">
                <h2 className="font-medium text-5xl leading-20 mt-20 text-primary" >Contactez-nous</h2>
                <p className="font-light text-2xl mt-10 leading-12">
                    Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement.<br />
                    Nous sommes là pour répondre à toutes vos questions.
                </p>
                <div className="bg-secondary mt-40 text-left rounded-4xl">
                    <div className="flex">
                        
                        <div className="w-[30%] m-5 rounded-4xl px-16 py-20 bg-[linear-gradient(119deg,rgb(37,40,54)_0%,rgba(0,180,216,0.38)_53%,rgba(0,180,216,0.63)_82%)]">
                            <h3 className="font-semibold text-2xl">Nos coordonnées</h3>
                            <p className="leading-7 mt-5">Tu préfères nous contacter directement ? Voici comment nous joindre.</p>

                            <ul className="list-none mt-10">
                                {
                                    contact.map((value , index) => (
                                        <li className="flex space-x-4 mt-10 items-center justify-start" key={index}><Image src={value.image} alt="phone number" /><span>{value.value}</span></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="mt-7">
                            <form className="relative top-18" >
                                <div className="flex">
                                    <div className="mt-3 p-5">
                                        <label htmlFor="fullname" className="font-semibold">Nom Complet: </label>
                                        <input type="text" id="fullname" name="fullname" className="mt-3 w-full border-b border-white p-2 text-lg" />
                                    </div>
                                    <div className="mt-3 p-5">
                                        <label htmlFor="email" className="font-semibold">Adresse E-mail: </label>
                                        <input type="email" id="email" name="email" className="mt-3 w-full border-b border-white p-2 text-lg"/>
                                    </div>
                                </div>
                                <div className="mt-3 p-5">
                                    <label htmlFor="subject" className="font-semibold">Objet: </label>
                                    <input type="text" id="subject" name="subject" className="mt-3 w-full border-b border-white p-2 text-lg"/>
                                </div>
                                <div className="mt-3 p-5">
                                    <label htmlFor="message" className="font-semibold text-primary">Message: </label>
                                    <textarea name="message" rows={10} id="message"className="mt-3 w-full border-b border-primary p-2 text-lg"></textarea>
                                </div>
                                <div className="mt-3 p-5">
                                    <Button type="submit" className="font-semibold text-white">Envoyer</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary w-full absolute h-160 top-240"></div>
        </section>
    )
}