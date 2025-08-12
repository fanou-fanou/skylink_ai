"use client";

import hubot from "@/assets/icons/hubot.svg";
import robot_one from "@/assets/icons/robot_one.svg";
import close_square from "@/assets/icons/close_square.svg";
import send from "@/assets/icons/send.svg";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type Message = { from: "user" | "bot"; text: string };

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Bonjour, comment puis-je vous aider ?" },
  ]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll automatique en bas à chaque nouveau message ou chargement
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
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
      const botMessage: Message = { from: "bot", text: botAnswer };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: Message = { from: "bot", text: "Erreur de communication." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  }

  // Envoi quand on presse Enter (sans shift)
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!loading) sendMessage();
    }
  }

  function MessageBubble({ from, text }: Message) {
    if (from === "user")
      return (
        <div className="flex justify-end">
          <div className="bg-[rgba(0,180,216,0.42)] w-fit max-w-[80%] break-words px-3 py-2 rounded-lg mx-1 my-2 text-sm">
            {text}
          </div>
        </div>
      );
    return (
      <div className="flex justify-start">
        <div className="bg-gray w-fit max-w-[80%] break-words px-3 py-2 rounded-lg mx-2 my-1 text-sm">
          {text}
        </div>
      </div>
    );
  }

  return (
    <section className="fixed z-[999] bottom-[20px] right-[30px] w-fit">
      {!isChatOpen && (
        <div
          onClick={() => setIsChatOpen(true)}
          className="rounded-full w-14 h-14 md:w-18 md:h-18 cursor-pointer bg-primary flex justify-center items-center"
          style={{ boxShadow: "0 0 11px 1px white" }}
        >
          <Image src={hubot} alt="chatbot message" className="w-[89%]" />
        </div>
      )}

      {isChatOpen && (
        <div className="bg-secondary w-70 md:w-100 rounded-xl h-130 shadow-[0px_-3px_7px_0px_rgba(255,255,255,0.27)] overflow-hidden flex flex-col">
          {/* Header fixe en haut */}
          <div className="bg-primary flex justify-between rounded-t-xl">
            <div className="flex text-white items-center">
              <div className="w-17 p-2">
                <Image src={robot_one} alt="chatbot user" className="w-full" />
              </div>
              <div>
                <h4 className="font-semibold text-md md:text-lg">FAQ Chatbot</h4>
                <p className="text-xs">Assistance IA 24h/24 et 7j/7</p>
              </div>
            </div>
            <div className="text-right w-1/3 flex justify-end-safe">
              <Image
                src={close_square}
                alt="chatbot icon message"
                onClick={() => setIsChatOpen(false)}
                className="w-[22%] cursor-pointer mr-3"
              />
            </div>
          </div>

          {/* Contenu qui prend toute la place restante */}
          <div className="bg-secondary text-white p-2 overflow-y-auto flex-grow">
            {messages.map((msg, i) => (
              <MessageBubble key={i} from={msg.from} text={msg.text} />
            ))}

            {/* Indicateur "En train d'écrire..." */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray w-fit max-w-[80%] break-words px-3 py-2 rounded-lg mx-2 my-1 text-sm italic text-gray-300">
                  En train d&apos;écrire...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer fixe en bas */}
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
                placeholder="Ecrivez ici ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <button type="submit" className="flex justify-center" disabled={loading}>
                <Image
                  src={send}
                  alt="send message"
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
