import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN_TRANSLATION from "./locales/en.json";
import LT_TRANSLATION from "./locales/lt.json";
import { LOCAL_STORAGE_KEYS } from "../constants/localstorage";

const selectedLanguage = localStorage.getItem(LOCAL_STORAGE_KEYS.LANGUAGE) || "";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: EN_TRANSLATION,
        },
        lt: {
            translation: LT_TRANSLATION,
        },
    },
    lng: selectedLanguage,
    fallbackLng: "en",
});

export default i18n;
