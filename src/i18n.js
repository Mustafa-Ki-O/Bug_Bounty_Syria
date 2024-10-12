import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locals/ar.json";
import en from "./locals/en.json";

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

const lang = localStorage.getItem("lang");

i18n.use(initReactI18next).init({
  resources,
  lng: lang ? lang : "ar",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
