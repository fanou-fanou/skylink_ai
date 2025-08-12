# Skylink Agency IA - Site IA en 7 jours

## Description

Skylink Agency vous propose une solution IA moderne, rapide et performante pour lancer votre projet web en seulement 7 jours. Cette landing page présente un site avec chatbot intelligent, SEO optimisé et performance garantie pour mobile.

---

## Arborescence du projet

```
.
├── eslint.config.mjs  
├── next.config.ts  
├── next-env.d.ts  
├── package.json  
├── pnpm-lock.yaml  
├── postcss.config.mjs  
├── public  
│   ├── favicon.svg  
│   ├── file.svg  
│   └── ... (autres fichiers SVG)  
├── README.md  
├── src  
│   ├── app  
│   │   ├── api  
│   │   │   ├── chatbot  
│   │   │   └── contact  
│   │   ├── favicon.ico  
│   │   ├── globals.css  
│   │   ├── layout.tsx  
│   │   └── page.tsx  
│   ├── assets  
│   │   ├── icons  
│   │   ├── images  
│   │   └── logo.svg  
│   ├── components  
│   │   ├── features  
│   │   ├── layouts  
│   │   ├── sections  
│   │   └── ui  
│   └── lib  
│       ├── data.tsx  
│       ├── faq.ts  
│       └── utils.ts  
└── tsconfig.json
```

---

## Fonctionnalités principales

|Fonctionnalité|Description|
|---|---|
|Chatbot intelligent|Répond automatiquement à 5 questions fréquentes via OpenAI API|
|Hero responsive et attractif|Section d’accueil mobile-friendly et visuellement impactante|
|SEO automatique|Génération automatique des balises title et description par IA|
|Formulaire connecté|Collecte des données via Supabase et notifications Slack en temps réel|
|Architecture sécurisée|Protection des données selon les bonnes pratiques modernes|

---

## Technologies utilisées

- **Next.js** (framework React pour SSR et SSG) version **15.4.5** avec **TypeScript** (typage statique)
    
- **React** version **19.1.0** (inclus avec Next.js)
    
- **OpenAI API** pour l’intégration du chatbot IA
    
- **Supabase** (backend open source) pour la gestion des données et authentification
    
- **Slack Webhook** pour recevoir les notifications en temps réel
    
- **Tailwind CSS** pour la gestion du design et styles responsives
    
- **Vercel** pour le déploiement et hébergement optimisés
    

---

## Librairies externes utilisées

|Librairie|Version|Rôle dans le projet|
|---|---|---|
|**@supabase/supabase-js**|^2.54.0|Client JavaScript pour interagir avec Supabase (base de données, authentification, stockage)|
|**class-variance-authority**|^0.7.1|Gestion des variantes CSS pour composants React (styles dynamiques avec Tailwind)|
|**clsx**|^2.1.1|Utilitaire pour combiner conditionnellement des classes CSS (facilite gestion classes Tailwind)|
|**openai**|^5.12.2|SDK officiel pour appeler l’API OpenAI (chatbot IA)|
|**react-hot-toast**|^2.5.2|Gestion des notifications toast dans l’interface utilisateur|
|**tailwind-merge**|^3.3.1|Fusion intelligente de classes Tailwind CSS pour éviter les doublons/conflicts|
|**zod**|^4.0.17|Validation et parsing des données (schémas robustes côté client et serveur)|

---

## Installation

1. Cloner le repository
    

```bash
git clone https://github.com/fanou-fanou/skylink_ai.git
cd skylink_ai
```

2. Installer les dépendances
    

```bash
pnpm install
```

3. Créer un fichier `.env.local` à la racine et ajouter les variables d’environnement (voir ci-dessous)
    
4. Lancer le serveur de développement
    

```bash
pnpm dev
```

5. Ouvrir l’application dans le navigateur
    

```
http://localhost:3000
```

### Variables d’environnement à ajouter dans `.env.local` :

```env
OPENAI_API_KEY=your_openai_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

---

## Usage

- Naviguer sur la landing page pour découvrir les sections : Accueil, Avantages, Fonctionnalités, Témoignages, Contact.
    
- Utiliser le formulaire pour tester la collecte des données et les notifications.
    
- Tester le chatbot IA avec les 5 questions fréquentes intégrées.
    

---

## Contribution

Le projet utilise Next.js et TypeScript. Le code est commenté et structuré pour faciliter la contribution.

**Processus pour contribuer :**

1. Forker le projet
    
2. Créer une branche feature
    

```bash
git checkout -b feature/ma-feature
```

3. Faire vos modifications
    
4. Soumettre une Pull Request
    

---

## Contact développeur

|Nom|Rabevasoa Fanomezana|
|---|---|
|Email|[rabevasoa.fanomezana@gmail.com](mailto:rabevasoa.fanomezana@gmail.com)|
|Téléphone|+261 34 87 407 74|