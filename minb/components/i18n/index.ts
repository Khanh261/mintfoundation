import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnTranslate from "./translate/en.json";
import ViTranslate from "./translate/vi.json";

export const lang =
  (typeof window !== "undefined" && localStorage.getItem("language")) || "en";

export const i18nInit = () => {
  return i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: EnTranslate,
      },
      vi: {
        translation: ViTranslate,
      },
    },
    lng: lang,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
};
