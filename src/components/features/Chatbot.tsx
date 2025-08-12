"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback, memo, JSX } from "react";

import hubot from "@/assets/icons/hubot.svg";
import robot_one from "@/assets/icons/robot_one.svg";
import close_square from "@/assets/icons/close_square.svg";
import send from "@/assets/icons/send.svg";

/**
 * Type représentant un message échangé dans le chatbot
 */
type Message = { 
  from: "user" | "bot"; 
  text: string; 
};

/**
 * Composant pour afficher une bulle de message individuelle
 * @param {Message} props - Propriétés du message
 * @param {"user" | "bot"} props.from - Expéditeur du message
 * @param {string} props.text - Texte du message
 * @returns {JSX.Element} Bulled e message stylisée selon l'expéditeur
 */
const MessageBubble = memo(function MessageBubble({ from, text }: Message) {
  const isUser = from === "user";
  const baseClasses =
    "w-fit max-w-[80%] break-words px-3 py-2 rounded-lg my-1 text-sm";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`${baseClasses} mx-${isUser ? "1" : "2"} ${
          isUser ? "bg-[rgba(0,180,216,0.42)]" : "bg-gray"
        }`}
      >
        {text}
      </div>
    </div>
  );
});

/**
 * Composant principal du chatbot intégré au site
 * 
 * Gère l'ouverture/fermeture du chat, l'affichage des messages,
 * la saisie utilisateur et la communication avec l'API backend.
 * 
 * @returns {JSX.Element} Interface complète du chatbot
 */
export default function Chatbot(): JSX.Element {
  // État pour contrôler l'ouverture du chat
  const [isChatOpen, setIsChatOpen] = useState(false);
  // État du texte saisi par l'utilisateur
  const [input, setInput] = useState("");
  // Historique des messages échangés dans le chat
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Bonjour, comment puis-je vous aider ?" },
  ]);
  // Indicateur de chargement lors de la requête au backend
  const [loading, setLoading] = useState(false);

  // Référence pour scroller automatiquement en bas de la liste des messages
  const messagesEndRef = useRef<HTMLDivElement>(null);

  /**
   * Effet pour faire défiler automatiquement vers le dernier message
   * à chaque ajout d'un message ou changement du statut de chargement.
   */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /**
   * Fonction pour envoyer un message utilisateur
   * Envoie la question au backend et ajoute la réponse dans l'historique
   */
  const sendMessage = useCallback(async () => {
    if (!input.trim()) return;

    const userMessage: Message = { from: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage.text }),
      });

      const data = await res.json();
      const botAnswer = data.answer || "Pas de réponse trouvée.";
      setMessages((prev) => [...prev, { from: "bot", text: botAnswer }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Erreur de communication." },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input]);

  /**
   * Gestionnaire d'événement pour envoi du message à la touche Entrée (sans Shift)
   * @param {React.KeyboardEvent<HTMLInputElement>} e - Événement clavier
   */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (!loading) sendMessage();
      }
    },
    [loading, sendMessage]
  );

  return (
    <section className="fixed z-[999] bottom-[20px] right-[30px] w-fit">
      {/* Bouton pour ouvrir le chatbot si fermé */}
      {!isChatOpen ? (
        <div
          onClick={() => setIsChatOpen(true)}
          className="rounded-full w-14 h-14 md:w-18 md:h-18 cursor-pointer bg-primary flex justify-center items-center"
          style={{ boxShadow: "0 0 9px 1px #ffffff85" }}
          aria-label="Ouvrir le chatbot"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") setIsChatOpen(true);
          }}
        >
          <Image src={hubot} alt="Icône chatbot" className="w-[89%]" />
        </div>
      ) : (
        <div className="bg-secondary w-70 md:w-100 rounded-xl h-130 shadow-[0px_-3px_7px_0px_rgba(255,255,255,0.27)] overflow-hidden flex flex-col">
          {/* En-tête fixe avec titre et bouton fermer */}
          <div className="bg-primary flex justify-between rounded-t-xl">
            <div className="flex text-white items-center">
              <div className="w-17 p-2">
                <Image src={robot_one} alt="Icône chatbot utilisateur" className="w-full" />
              </div>
              <div>
                <h4 className="font-semibold text-md md:text-lg">FAQ Chatbot</h4>
                <p className="text-xs">Assistance IA 24h/24 et 7j/7</p>
              </div>
            </div>
            <div className="text-right w-1/3 flex justify-end-safe">
              <Image
                src={close_square}
                alt="Fermer le chatbot"
                onClick={() => setIsChatOpen(false)}
                className="w-[22%] cursor-pointer mr-3"
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter") setIsChatOpen(false);
                }}
              />
            </div>
          </div>

          {/* Zone de contenu des messages */}
          <div className="bg-secondary text-white p-2 overflow-y-auto flex-grow">
            {messages.map((msg, i) => (
              <MessageBubble key={i} {...msg} />
            ))}

            {/* Indicateur de saisie en cours */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray w-fit max-w-[80%] break-words px-3 py-2 rounded-lg mx-2 my-1 text-sm italic text-gray-300">
                  En train d&apos;écrire...
                </div>
              </div>
            )}
            {/* Ancre pour scroll automatique */}
            <div ref={messagesEndRef} />
          </div>

          {/* Pied de page avec saisie du message */}
          <div
            className="w-full rounded-b-xl text-sm py-1"
            style={{ boxShadow: " #ffffff45 0px -3px 7px 0px" }}
          >
            <form
              className="flex"
              onSubmit={(e) => {
                e.preventDefault();
                if (!loading) sendMessage();
              }}
            >
              <input
                type="text"
                className="w-full p-3 text-white outline-none focus:outline-none focus:ring-0 bg-transparent"
                placeholder="Écrivez ici ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                spellCheck={false}
                autoComplete="off"
                aria-label="Zone de saisie du message"
              />
              <button
                type="submit"
                className="flex justify-center"
                disabled={loading}
                aria-label="Envoyer le message"
              >
                <Image
                  src={send}
                  alt="Envoyer le message"
                  className={`w-[50%] relative top-0 cursor-pointer ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
