import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import radial_ellipse from "@/assets/images/radial_ellipse.svg";
import HeroImage from "@/assets/images/hero_image.png";

export default function Navbar() {
    return (
        <header>
            <nav>
                <Image src={HeroImage} alt="hero illustration" className="absolute top-0 right-0" />

                <Image src={radial_ellipse} alt="radial_ellipse" className="absolute top-0 right-0 w-[80%] h-[120vh] z-0" />
                <div className="container mx-auto px-6 flex items-center justify-between py-4 relative z-60">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src={Logo} alt="Logo" />
                    </Link>
                    <ul className="hidden md:flex items-center space-x-12 text-white">
                        <li><Link href="#home" className="hover:text-primary">Accueil</Link></li>
                        <li><Link href="#advantages" className="hover:text-primary">Avantages</Link></li>
                        <li><Link href="#features" className="hover:text-primary">Fonctionnalités</Link></li>
                        <li><Link href="#testimonials" className="hover:text-primary">Témoignages</Link></li>
                        <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
                    </ul>
                    <div className="flex space-x-3">
                        <Button href="#login" variant="secondary">Se connecter</Button>
                        <Button href="#register">S’inscrire</Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
