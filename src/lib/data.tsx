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

import testimonials_1 from "@/assets/images/testimonials_1-min.jpg";
import testimonials_2 from "@/assets/images/testimonials_2-min.jpg";
import testimonials_3 from "@/assets/images/testimonials_3-min.jpg";
import testimonials_4 from "@/assets/images/testimonials_4-min.jpg";
import { StaticImageData } from "next/image";
import { JSX } from "react";

import phone from "@/assets/icons/phone.svg";
import email from "@/assets/icons/email.svg";
import place from "@/assets/icons/place.svg";

import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import x from "@/assets/icons/x.svg";
import github from "@/assets/icons/github.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

/**
 * Représente un avantage simple avec icône, titre et description.
 */
interface Advantage {
  /** Chemin vers l’icône SVG importée */
  icon: string;
  /** Titre de l’avantage */
  title: string;
  /** Description détaillée de l’avantage */
  description: string;
}

/**
 * Liste des avantages principaux affichés.
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
 * Représente un avantage avec un pourcentage d’amélioration affiché.
 */
interface AdvantageAside extends Advantage {
  /** Indication en pourcentage (ex: "+ 70%", "- 50%") */
  percentage: string;
}

/**
 * Liste secondaire des avantages avec indicateurs de pourcentage.
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
 * Représente une fonctionnalité détaillée avec icône, titre,
 * description et position verticale pour affichage.
 */
interface Feature {
  /** Icône SVG ou image statique */
  icon: string | StaticImageData;
  /** Titre de la fonctionnalité, peut contenir du JSX */
  title: string | JSX.Element;
  /** Description détaillée, peut contenir du JSX */
  description: string | JSX.Element;
  /** Décalage vertical (en pixels) pour positionnement visuel */
  top: number;
}

/**
 * Liste des fonctionnalités détaillées du produit/service.
 */
export const features: Feature[] = [
  {
    icon: chatbot,
    title: "Chatbot intelligent intégré",
    description: "Répond automatiquement à 5 questions fréquentes grâce à l’IA.",
    top: 26,
  },
  {
    icon: devices,
    title: "Hero responsive et attractif",
    description: "Une section d’accueil visuellement percutante et mobile-friendly.",
    top: 18,
  },
  {
    icon: seomobile,
    title: (
      <>
        Génération automatique
        <br />
        de balises SEO
      </>
    ),
    description: "Optimise votre présence sur Google sans effort manuel.",
    top: 16,
  },
  {
    icon: database,
    title: (
      <>
        Formulaire connecté à
        <br />
        Supabase + Slack
      </>
    ),
    description: "Collecte de données centralisée et notifications en temps réel.",
    top: 16,
  },
  {
    icon: boat,
    title: (
      <>
        Score PageSpeed mobile
        <br />
        plus 70 garanti
      </>
    ),
    description: "Performance assurée pour une expérience utilisateur rapide.",
    top: 27,
  },
  {
    icon: security,
    title: "Architecture sécurisée",
    description: "Protection des données utilisateurs avec les bonnes pratiques modernes.",
    top: 16,
  },
];

/**
 * Représente un témoignage client avec image, texte et nom.
 */
interface Testimonial {
  /** Image statique importée du client */
  image: StaticImageData;
  /** Texte du témoignage */
  text: string;
  /** Nom du client */
  name: string;
}

/**
 * Liste des témoignages clients.
 */
export const testimonials: Testimonial[] = [
  {
    image: testimonials_3,
    text:
      "Je perdais trop de temps à répondre aux interrogations répétées de mes clients. Maintenant, avec cette IA, tout est géré en temps réel et je peux avancer sur mes projets prioritaires.",
    name: "Julie Martin",
  },
  {
    image: testimonials_2,
    text:
      "Trop souvent, je me suis senti dépassé par les questions de mes clients. Depuis que j'ai intégré ce site IA, le chatbot répond instantanément, libérant mon temps pour des tâches plus importantes",
    name: "Marilyne Blanca",
  },
  {
    image: testimonials_1,
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

/**
 * Représente un contact avec icône et valeur affichée.
 */
interface Contact {
  /** Icône SVG importée */
  image: StaticImport;
  /** Valeur de contact (téléphone, email, adresse, etc.) */
  value: string;
}

/**
 * Liste des contacts à afficher.
 */
export const contact: Contact[] = [
  {
    image: phone,
    value: "078.268.24.98",
  },
  {
    image: email,
    value: "skylinkagency.pro@gmail.com",
  },
  {
    image: place,
    value: "Genève",
  },
];

/**
 * Représente un réseau social avec icône et lien URL.
 */
interface SocialNetwork {
  /** Icône SVG importée */
  image: StaticImport;
  /** URL vers le profil du réseau social */
  link: string;
}

/**
 * Liste des réseaux sociaux à afficher.
 */
export const socialNetwork: SocialNetwork[] = [
  {
    image: facebook,
    link: "https://www.facebook.com/profile.php?id=61569180991583#",
  },
  {
    image: instagram,
    link: "https://www.instagram.com/sky.linkagency/",
  },
  {
    image: x,
    link: "https://www.x.com",
  },
  {
    image: github,
    link: "https://www.github.com/",
  },
];
