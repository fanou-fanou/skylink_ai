import network from "@/assets/icons/network.svg";
import rocket from "@/assets/icons/rocket.svg";
import speed from "@/assets/icons/speed.svg";

import efficiency from "@/assets/icons/efficiency.svg";
import robot from "@/assets/icons/robot.svg";
import timer from "@/assets/icons/timer.svg";
import seo from "@/assets/icons/seo.svg";

import chatbot from "@/assets/icons/chatbot.svg";
import devices from "@/assets/icons/devices.svg";
import seomobile from "@/assets/icons/seomobile.svg";
import database from "@/assets/icons/database.svg";
import boat from "@/assets/icons/boat.svg";
import security from "@/assets/icons/security.svg";

import testimonials_1 from "@/assets/images/testimonials_1.jpg";
import testimonials_2 from "@/assets/images/testimonials_2.jpg";
import testimonials_3 from "@/assets/images/testimonials_3.jpg";
import testimonials_4 from "@/assets/images/testimonials_4.jpg";
import { StaticImageData } from "next/image";
import { JSX } from "react";


import phone from "@/assets/icons/phone.svg";
import email from "@/assets/icons/email.svg";
import place from "@/assets/icons/place.svg";

/**
 * Type representing a simple advantage item.
 */
interface Advantage {
  icon: string;          // Path to the imported SVG icon
  title: string;         // Advantage title
  description: string;   // Description of the advantage
}

/**
 * List of main advantages with icon, title, and description.
 */
export const advantages: Advantage[] = [
  {
    icon: rocket,
    title: "Rapide à déployer",
    description: "Développement en seulement 7 jours.",
  },
  {
    icon: network,
    title: "Intelligence Artificielle intégrée",
    description: "Chatbot FAQ pour vos utilisateurs.",
  },
  {
    icon: speed,
    title: "Performance garantie",
    description: "Optimisé pour mobile et SEO.",
  },
];

/**
 * Type representing an advantage with an additional percentage field.
 */
interface AdvantageAside extends Advantage {
  percentage: string;    // Improvement or gain percentage as a string (e.g., "+ 70%", "- 50%")
}

/**
 * List of secondary advantages including percentage indicators.
 */
export const advantageAside: AdvantageAside[] = [
  {
    icon: efficiency,
    title: "Productivité accrue",
    description: "AUTOMATISATION DES RÉPONSES",
    percentage: "+ 70%",
  },
  {
    icon: robot,
    title: "Support amélioré",
    description: "RÉPONSES 24H/24 GRÂCE AU CHATBOT",
    percentage: "+ 100%",
  },
  {
    icon: timer,
    title: "Gain de temps",
    description: "DÉPLOIEMENT RAPIDE",
    percentage: "- 50%",
  },
  {
    icon: seo,
    title: "Visibilité web",
    description: "OPTIMISATION SEO INCLUSE",
    percentage: "+ 100%",
  },
];

/**
 * Type representing a feature with icon, title, and description.
 */

interface Feature {
  icon: string | StaticImageData; // Path to the SVG icon
  title: string | JSX.Element;    // Can be plain text or JSX
  description: string | JSX.Element; // Same here if you want <br/> etc.
  top: number;                    // Position offset in pixels
}

/**
 * List of detailed product/service features.
 */
export const features: Feature[] = [
  {
    icon: chatbot,
    title: "Chatbot intelligent intégré",
    description: "Répond automatiquement à 5 questions fréquentes grâce à l’IA.",
    top: 26
  },
  {
    icon: devices,
    title: "Hero responsive et attractif",
    description: "Une section d’accueil visuellement percutante et mobile-friendly.",
    top: 18
  },
  {
    icon: seomobile,
    title: <>Génération automatique<br /> de balises SEO</>,
    description: "Optimise votre présence sur Google sans effort manuel.",
    top: 16
  },
  {
    icon: database,
    title: <>Formulaire connecté à<br /> Supabase + Slack</>,
    description: "Collecte de données centralisée et notifications en temps réel.",
    top: 16
  },
  {
    icon: boat,
    title: <>Score PageSpeed mobile<br /> plus 70 garanti</>,
    description: "Performance assurée pour une expérience utilisateur rapide.",
    top: 27
  },
  {
    icon: security,
    title: "Architecture sécurisée",
    description: "Protection des données utilisateurs avec les bonnes pratiques modernes.",
    top: 16
  },
];


/**
 * Type representing a client testimonial with image, text, and name.
 */
interface Testimonial {
  image: StaticImageData;       // Path to the imported JPG image
  text: string;        // Testimonial text
  name: string;        // Name of the person giving the testimonial
}

/**
 * List of client testimonials.
 */
export const testimonials: Testimonial[] = [
  {
    image: testimonials_1,
    text: "Je perdais trop de temps à répondre aux interrogations répétées de mes clients. Maintenant, avec cette IA, tout est géré en temps réel et je peux avancer sur mes projets prioritaires.",
    name: "Julie Martin",
  },
  {
    image: testimonials_2,
    text:
      "Trop souvent, je me suis senti dépassé par les questions de mes clients. Depuis que j'ai intégré ce site IA, le chatbot répond instantanément, libérant mon temps pour des tâches plus importantes",
    name: "Marilyne Blanca",
  },
  {
    image: testimonials_3,
    text:
      "Avant, je passais des heures à traiter les mêmes questions de mes clients. Depuis que j’utilise cet outil IA, les réponses arrivent sur-le-champ, et je peux enfin me concentrer sur le reste.",
    name: "Karim Diallo",
  },
  {
    image: testimonials_4,
    text:
      "Souvent, j’étais submergée par les demandes répétitives de mes clients. Grâce à cette plateforme IA, l’assistant répond en un instant, me laissant libre pour mes missions essentielles.",
    name: "Sophie Lambert",
  },
];


interface Contact {
  image: any;  
  value: string;
}


export  const contact: Contact[] = [
  {
    image: phone,
    value: "078.268.24.98"
  },
  {
    image: email,
    value: "skylinkagency.pro@gmail.com"
  },
  {
    image: place,
    value: "Genève"
  }
]