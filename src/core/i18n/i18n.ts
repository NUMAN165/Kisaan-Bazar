import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './locales/en.json';
import hi from './locales/hi.json';
import mr from './locales/mr.json';

const STORE_LANGUAGE_KEY = 'settings.lang';

const languageDetectorPlugin = {
  type: 'languageDetector' as const,
  async: true,
  init: () => {},
  detect: async (callback: (lang: string) => void) => {
    try {
      const language = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
      if (language) {
        return callback(language);
      } else {
        return callback('en');
      }
    } catch (error) {
      console.log('Error reading language', error);
      return callback('en');
    }
  },
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {
      console.log('Error saving language', error);
    }
  },
};

export const resources = {
  en,
  hi,
  mr,
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    fallbackLng: 'en',
    compatibilityJSON: 'v4', // Required for React Native on Android
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
