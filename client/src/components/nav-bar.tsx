import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Menu, X } from 'lucide-react';
import { Language, getText } from '@/lib/translations';

interface NavBarProps {
  language: Language;
}

export function NavBar({ language }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add background and shadow when scrolled down
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (scrollTop > lastScrollTop && scrollTop > 300) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  // Handle smooth scrolling for anchor links
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const targetElement = document.querySelector(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 70,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 backdrop-blur-sm shadow-md' : 'bg-black bg-opacity-70'
      } ${
        isHidden ? 'transform -translate-y-full' : 'transform translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="text-primary font-bold text-2xl tracking-widest hover:text-white transition-colors duration-300 font-mono"
            >
              NullSig
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              {getText(language, 'nav.home')}
            </a>
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#about');
              }}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              {getText(language, 'nav.about')}
            </a>
            <a 
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#services');
              }}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              {getText(language, 'nav.services')}
            </a>
            <a 
              href="#cases"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#cases');
              }}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              {getText(language, 'nav.cases')}
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="text-gray-300 hover:text-primary transition-colors duration-300"
            >
              {getText(language, 'nav.contact')}
            </a>
            
            <LanguageSwitcher className="ml-4" />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-black border-t border-neutral-800 ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="block px-3 py-2 rounded-md text-white hover:bg-neutral-800 hover:text-primary"
          >
            {getText(language, 'nav.home')}
          </a>
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#about');
            }}
            className="block px-3 py-2 rounded-md text-white hover:bg-neutral-800 hover:text-primary"
          >
            {getText(language, 'nav.about')}
          </a>
          <a 
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#services');
            }}
            className="block px-3 py-2 rounded-md text-white hover:bg-neutral-800 hover:text-primary"
          >
            {getText(language, 'nav.services')}
          </a>
          <a 
            href="#cases"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#cases');
            }}
            className="block px-3 py-2 rounded-md text-white hover:bg-neutral-800 hover:text-primary"
          >
            {getText(language, 'nav.cases')}
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="block px-3 py-2 rounded-md text-white hover:bg-neutral-800 hover:text-primary"
          >
            {getText(language, 'nav.contact')}
          </a>
          <div className="flex items-center space-x-2 mt-4 px-3 py-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
