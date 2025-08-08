import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image"; 
import Logo from "@/assets/logo.svg";

export default function Navbar() {
    return (
        <header>
            <nav className="flex items-center justify-between px-6 py-4 bg-secondary">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src={Logo} alt="Logo" className="" />
                </Link>
                <ul className="hidden md:flex items-center space-x-6 text-white">
                    <li><Link href="#home">Accueil</Link></li>
                    <li><Link href="#features">Fonctionnalités</Link></li>
                    <li><Link href="#advantages">Avantages</Link></li>
                    <li><Link href="#testimonials">Témoignages</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
                <div className="flex space-x-3">
                    <Button variant="secondary">Se connecter</Button>
                    <Button> S’inscrire </Button>
                </div>
            </nav>
        </header>
    );
}
