import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { socialNetwork } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="pt-35">
            <div className="container mx-auto  pb-6">
                {/* Flex + Wrap pour responsive */}
                <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-y-8 px-6 md:px-0">
                    
                    {/* Colonne 1 */}
                    <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 mt-10">
                        <Image src={Logo} alt="Logo" />
                        <p className="leading-8 mt-4 pr-0 md:pr-20 font-light">
                            Une solution IA moderne, rapide et adaptée à vos besoins. Optimisez votre présence en ligne avec une technologie performante.
                        </p>
                        <div className="flex mt-9">
                            {socialNetwork.map((value, index) => (
                                <Link
                                    key={index}
                                    target="_blank"
                                    href={value.link}
                                    className="bg-[rgb(165,183,223,0.19)] w-10 h-10 mr-2 shadow rounded-full flex items-center justify-center"
                                >
                                    <Image src={value.image} alt={value.link.split(".")[1]} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Colonne 2 */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-10">
                        <h2 className="text-primary text-2xl">Plan du Site</h2>
                        <ul className="mt-5 font-light">
                            <li className="mt-3"><Link href="#home" className="hover:text-primary">Accueil</Link></li>
                            <li className="mt-3"><Link href="#advantages" className="hover:text-primary">Avantages</Link></li>
                            <li className="mt-3"><Link href="#features" className="hover:text-primary">Fonctionnalités</Link></li>
                            <li className="mt-3"><Link href="#testimonials" className="hover:text-primary">Témoignages</Link></li>
                            <li className="mt-3"><Link href="#contact" className="hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Colonne 3 */}
                    <div className="w-full md:w-full lg:w-1/4 mt-10">
                        <h2 className="text-primary text-2xl">Mentions légales</h2>
                        <ul className="mt-5 font-light">
                            <li className="mt-3"><Link href="#conditions" className="hover:text-primary">Conditions d&apos;utilisation</Link></li>
                            <li className="mt-3"><Link href="#privacy" className="hover:text-primary">Politique de confidentialité</Link></li>
                            <li className="mt-3"><Link href="#cookies" className="hover:text-primary">Gestion des cookies</Link></li>
                            <li className="mt-3"><Link href="#ip" className="hover:text-primary">Propriété intellectuelle</Link></li>
                            <li className="mt-3"><Link href="#accessibility" className="hover:text-primary">Accessibilité</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#ffffff24] text-center py-2">
                <p className="text-xs font-extralight">© 2025 SkyLink Agency – Tous droits réservés</p>
            </div>
        </footer>
    );
}
