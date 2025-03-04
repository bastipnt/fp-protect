import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationDE from "./locales/de/translation.json";
import translationEN from "./locales/en/translation.json";

export const defaultNS = "en";
export const resources = {
  en: { translation: translationEN },
  de: { translation: translationDE },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
    debug: false,
    returnEmptyString: false,
  });

export default i18n;
