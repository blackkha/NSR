import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { Language } from '@/lib/translations';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Button
        onClick={() => setLanguage('en')}
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
        onClick={() => setLanguage('uk')}
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
