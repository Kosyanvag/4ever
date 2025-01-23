import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Импорт переводов
import translationRU from "./Components/locales/ru/translation.json";
import translationAM from "./Components/locales/am/translation.json";

const resources = {
  ru: {
    translation: translationRU,
  },
  am: {
    translation: translationAM,
  },
};

i18n
  .use(LanguageDetector) // Для автоматического определения языка
  .use(initReactI18next) // Подключаем React-обертку
  .init({
    resources,
    fallbackLng: "ru", // Язык по умолчанию, если перевод для текущего языка не найден
    lng: localStorage.getItem("i18nextLng") || "ru", // По умолчанию "ru", если ничего нет в localStorage
    detection: {
      order: ["localStorage", "cookie", "navigator"], // Порядок поиска языка
      caches: ["localStorage"], // Кешируем язык в localStorage
      // Здесь мы исключаем "en", чтобы язык по умолчанию был только "ru" или "am"
      lookupLocalStorage: "i18nextLng", // Используем эту переменную для хранения языка
      checkWhitelist: true, // Проверяем, чтобы не было случайного выбора языка, которого нет в списке
    },
    interpolation: {
      escapeValue: false, // Отключаем экранирование значений для React
    },
    debug: true, // Включаем отладку для i18n
    whitelist: ["ru", "am"], // Языки, которые поддерживаются в проекте
  });

console.log("Инициализация i18n завершена");
console.log("Текущий язык:", i18n.language);
console.log("Доступные языки:", i18n.languages);

export default i18n;
