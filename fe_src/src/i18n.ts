import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import koCommon from "./locales/ko/common.json";

// 브라우저의 언어 또는 로컬스토리지에서 언어 가져오기
const savedLanguage = localStorage.getItem("language");
const browserLanguage = navigator.language.split("-")[0]; // 'en-US' -> 'en'
const defaultLanguage =
  savedLanguage || (browserLanguage === "ko" ? "ko" : "en");

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
    },
    ko: {
      common: koCommon,
    },
  },
  lng: defaultLanguage,
  fallbackLng: "en",
  defaultNS: "common",
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
