import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';

export function useLanguage() {
  // Initialize with saved language or default to English
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    return (savedLang === 'en' || savedLang === 'uk') ? savedLang : 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
    // Update the html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'uk' : 'en');
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
  };
}
