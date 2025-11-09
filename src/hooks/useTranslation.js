import { useLanguage } from "../context/LanguageContext";
import enTranslations from "../locales/en.json";
import arTranslations from "../locales/ar.json";

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t };
};
