import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

/**
 * Combine et fusionne les classes CSS avec gestion des conflits Tailwind.
 *
 * Cette fonction combine les classes CSS passées en arguments,
 * en utilisant `clsx` pour concaténer conditionnellement,
 * puis `twMerge` pour fusionner les classes Tailwind conflictuelles.
 *
 * @param {...ClassValue[]} inputs - Liste des classes CSS ou expressions conditionnelles.
 * @returns {string} Chaîne de classes CSS fusionnées et optimisées.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convertit un noeud React JSX en texte brut.
 *
 * Cette fonction récursive extrait le texte contenu dans un ReactNode,
 * gère les chaînes, les nombres, les tableaux, les éléments React, et
 * remplace les balises `<br />` par un saut de ligne.
 *
 * @param {React.ReactNode} node - Le noeud React à convertir en texte.
 * @returns {string} Le texte brut extrait du noeud JSX.
 */
export function jsxToString(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(jsxToString).join("");
  }
  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    if (element.type === "br") return "\n"; // Remplace <br /> par saut de ligne
    return jsxToString(element.props.children);
  }
  return "";
}
