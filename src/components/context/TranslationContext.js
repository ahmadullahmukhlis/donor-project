import { createContext, useContext, useEffect, useState } from 'react';

// Create a TranslationContext
const TranslationContext = createContext();

// TranslationProvider component
export const TranslationProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translations, setTranslations] = useState({ menu: {}, language: {} });

  // Load translations when the component mounts or when the language changes
  useEffect(() => {
    const language = new URLSearchParams(window.location.search).get('lang') || 'en';
    setSelectedLanguage(language);
    loadTranslations(language);
  }, []);

  // Function to fetch and set translations
  const loadTranslations = async (language) => {
    try {
      const response = await fetch(`/locales/${language}/common.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error("Error loading translations:", error);
      if (language !== 'en') {
        loadTranslations('en'); // Fallback to English if loading translations fails
      }
    }
  };

  // Handle language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    loadTranslations(language);
  };

  return (
    <TranslationContext.Provider value={{ selectedLanguage, translations, handleLanguageChange }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook to use the TranslationContext
export const useTranslation = () => {
  return useContext(TranslationContext);
};
