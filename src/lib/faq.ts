/**
 * Représente une question fréquente (FAQ) avec sa réponse.
 */
interface FAQItem {
  /** Question posée par l'utilisateur */
  question: string;
  /** Réponse fournie pour la question */
  answer: string;
}

/**
 * Liste des questions fréquemment posées par les clients
 * avec leurs réponses associées.
 */
export const frequentlyAskedQuestions: FAQItem[] = [
  {
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs commencent à 2'200 CHF pour un site IA livré en 7 jours.",
  },
  {
    question: "Combien de temps pour livrer ?",
    answer: "La livraison prend 7 jours à partir de la validation du projet.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "Nous utilisons Next.js, TypeScript et des services IA comme OpenAI.",
  },
  {
    question: "Puis-je personnaliser le design ?",
    answer: "Oui, nous adaptons le design à vos besoins et à votre charte graphique.",
  },
  {
    question: "Comment puis-je vous contacter ?",
    answer: "Vous pouvez nous joindre via notre formulaire, Slack ou WhatsApp.",
  },
];
