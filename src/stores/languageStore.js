import { ref } from "vue";
import { defineStore } from "pinia";
import { translations } from "@/i18n/translations";

const DEFAULT_LANGUAGE = "es";
const SUPPORTED_LANGUAGES = Object.keys(translations);

function normalizeLanguage(lang) {
  const normalizedLang = String(lang || "").toLowerCase();

  return SUPPORTED_LANGUAGES.includes(normalizedLang) ? normalizedLang : DEFAULT_LANGUAGE;
}

function findTranslation(language, key) {
  const keys = key.split(".");
  let value = translations[language];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return undefined;
    }
  }

  return value;
}

export const useLanguageStore = defineStore("language", () => {
  // Estado: idioma actual
  const currentLanguage = ref(normalizeLanguage(localStorage.getItem("language")));

  // Cambiar idioma
  function setLanguage(lang) {
    const normalizedLang = normalizeLanguage(lang);

    currentLanguage.value = normalizedLang;
    localStorage.setItem("language", normalizedLang);
  }

  // Obtener texto traducido
  function t(key) {
    const translatedValue =
      findTranslation(currentLanguage.value, key) ?? findTranslation(DEFAULT_LANGUAGE, key);

    return translatedValue ?? key;
  }

  return { currentLanguage, setLanguage, t };
});
