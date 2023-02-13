import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import transEn from "./locale/en.json";
import transAr from "./locale/ar.json";
i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: transEn,
      },
      ar: {
        translation: transAr,
      },
    },
    lng: "ar",
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
