import React from 'react';
import { Button } from '@/components/ui/button';
import { Language } from '@/lib/translations';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  // Simplest way to determine current language is by URL path
  const isUkrainianPage = window.location.pathname.includes('/uk');
  const language: Language = isUkrainianPage ? 'uk' : 'en';

  // Direct navigation to different language versions
  const switchToEnglish = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem('selectedLanguage'); // Clear any stored preference
    window.location.href = '/';
  };

  const switchToUkrainian = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.setItem('selectedLanguage', 'uk');
    window.location.href = '/uk';
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Button
        onClick={switchToEnglish}
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        className={`w-8 h-6 p-0 text-xs font-bold ${
          language === 'en' 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-transparent border border-gray-700 hover:border-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </Button>
      <Button
        onClick={switchToUkrainian}
        variant={language === 'uk' ? 'default' : 'outline'}
        size="sm"
        className={`w-8 h-6 p-0 text-xs font-bold ${
          language === 'uk' 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-transparent border border-gray-700 hover:border-white'
        }`}
        aria-label="Переключити на українську"
      >
        UA
      </Button>
    </div>
  );
}
