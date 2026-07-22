import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, languages } from "./translations";

const LanguageContext = createContext();

const STORAGE_KEY = "uyp_language";

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get("lang");
  if (langParam && translations[langParam]) return langParam;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && translations[stored]) return stored;
  const browser = navigator.language?.slice(0, 2);
  if (browser && translations[browser]) return browser;
  return "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (translations[lang]) setLanguageState(lang);
  }, []);

  const t = useCallback((key) => {
    const value = key.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), translations[language]);
    return value;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}