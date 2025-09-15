import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 번역 리소스 임포트
import koTranslation from './locales/ko/translation.json';
import enTranslation from './locales/en/translation.json';

const resources = {
  ko: {
    translation: koTranslation
  },
  en: {
    translation: enTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    supportedLngs: ['ko', 'en'],
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
      lookupQuerystring: 'lng',
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    debug: process.env.NODE_ENV === 'development'
  });

export default i18n;
