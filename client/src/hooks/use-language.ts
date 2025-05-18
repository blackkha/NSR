import { useState, useEffect } from 'react';
import { Language } from '@/lib/translations';

export function useLanguage() {
  // Initialize with English as default
  const [language, setLanguage] = useState<Language>('en');
  
  // Check for URL parameter or localStorage on component mount
  useEffect(() => {
    // First check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam === 'uk') {
      setLanguage('uk');
      localStorage.setItem('selectedLanguage', 'uk');
      return;
    }
    
    // Otherwise check localStorage
    try {
      const savedLang = localStorage.getItem('selectedLanguage');
      if (savedLang === 'uk') {
        setLanguage('uk');
      }
    } catch (error) {
      console.warn('Error accessing localStorage:', error);
    }
  }, []);
  
  // Toggle between languages
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'uk' : 'en';
    setLanguage(newLang);
    try {
      localStorage.setItem('selectedLanguage', newLang);
    } catch (error) {
      console.warn('Error saving to localStorage:', error);
    }
  };
  
  return {
    language,
    setLanguage,
    toggleLanguage
  };
}
