import Logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="pt-35">
            <div className="container mx-auto">
                <div className="flex">
                    <div>
                        <Image src={Logo} alt="Logo" />
                        <p>Une solution IA moderne, rapide et adaptée à vos besoins.  Optimisez votre présence en ligne avec une technologie performante.</p>
                    </div>
                    <div>
                        <h2>Plan du Site</h2>
                        <ul>
                            <li>Accueil</li>
                            <li>Avantages</li>
                            <li>Fonctionnalités</li>
                            <li>Témoignages</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Mentions légales</h2>
                         <ul>
                            <li>Conditions d'utilisation</li>
                            <li>Politique de confidentialité</li>
                            <li>Gestion des cookies</li>
                            <li>Propriété intellectuelle</li>
                            <li>Accessibilité</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}