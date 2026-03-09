import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import de from './locales/de.json';

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return 'en';

  const stored = localStorage.getItem('lang');
  if (stored) return stored;

  const browserLangs = navigator.languages ?? [navigator.language];
  const detected = browserLangs.find((lng) => lng?.toLowerCase().startsWith('de'));

  return detected ? 'de' : 'en';
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    try {
      localStorage.setItem('lang', lng);
    } catch {
      // ignore storage errors (private mode, quota, etc.)
    }
  });
}

export default i18n;
