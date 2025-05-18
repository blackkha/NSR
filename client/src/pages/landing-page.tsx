import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavBar } from '@/components/nav-bar';
import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ServiceCard } from '@/components/service-card';
import { ContactForm } from '@/components/contact-form';
import { useLanguage } from '@/hooks/use-language';
import { getText } from '@/lib/translations';
import { cybersecurityImages, digitalIntelligenceImages, dataAnalysisImages } from '@/lib/assets';
import cyberEncryptionImage from '@/assets/cyber-encryption.jpg';
import { Link, ExternalLink, FileText, Fingerprint, ClipboardCheck, BadgeCheck, UserSearch } from 'lucide-react';

export default function LandingPage() {
  const { language } = useLanguage();
  
  // Update document title based on language
  useEffect(() => {
    document.title = `NullSig | ${language === 'en' ? 'Passive Intelligence' : 'Пасивний збір даних'}`;
  }, [language]);

  // Smooth scrolling function for button clicks
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 70,
        behavior: 'smooth'
      });
    }
  };
  
  // Get service items based on current language
  const servicesData = getText(language, 'services.items');
  const casesData = getText(language, 'cases.items');
  const serviceItems = Array.isArray(servicesData) ? servicesData : [];
  const caseItems = Array.isArray(casesData) ? casesData : [];
  
  // Icons for service cards - match with the translations
  const serviceIcons = {
    'user-search': <UserSearch className="h-8 w-8" />,
    'badge-check': <BadgeCheck className="h-8 w-8" />,
    'file-text': <FileText className="h-8 w-8" />,
    'fingerprint': <Fingerprint className="h-8 w-8" />,
    'clipboard-check': <ClipboardCheck className="h-8 w-8" />
  };
  
  // Case icons
  const caseIcons = [
    <Link key="link" className="text-primary mt-1 mr-3 h-5 w-5" />,
    <FileText key="filetext" className="text-primary mt-1 mr-3 h-5 w-5" />,
    <ExternalLink key="externallink" className="text-primary mt-1 mr-3 h-5 w-5" />
  ];

  return (
    <div className="bg-black text-white min-h-screen font-mono">
      {/* Navigation */}
      <NavBar language={language} />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Full screen starting after header */}
        <div className="absolute inset-0 top-16 z-0 bg-black">
          <img src={cyberEncryptionImage} 
               alt="Cyber encryption" 
               className="w-full h-full object-cover opacity-100 enhanced-image" />
          {/* Grain overlay for texture */}
          <div className="grain-overlay"></div>
        </div>
        
        {/* Scanner Line */}
        <div className="scanner-line z-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedText
            text={getText(language, 'hero.title')}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest mb-4 text-white"
            glitch={true}
            tag="h1"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl mt-6 italic text-gray-300 font-sans"
          >
            {getText(language, 'hero.tagline')}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="uppercase text-sm md:text-base text-neutral-500 mt-4 tracking-wider font-sans"
          >
            {getText(language, 'hero.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12"
          >
            <Button 
              onClick={() => scrollToSection('#services')}
              className="bg-transparent text-primary border border-primary px-8 py-3 rounded hover:bg-primary hover:text-black transition-all duration-300 transform hover:-translate-y-1 font-sans font-medium tracking-wide"
            >
              {getText(language, 'hero.button')}
            </Button>
          </motion.div>
          

        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-8 border-b pb-2 border-neutral-700 flex items-center"
          >
            <span className="text-primary mr-2">&gt;</span>
            <span>{getText(language, 'about.title')}</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <p className="text-gray-300 leading-relaxed font-sans">
                {getText(language, 'about.description')}
              </p>
              <blockquote className="mt-6 text-neutral-500 italic border-l-4 pl-4 border-primary">
                <p>"{getText(language, 'about.quote')}"</p>
              </blockquote>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-lg"
            >
              {/* Digital Intelligence Visualization */}
              <img src={digitalIntelligenceImages[0]} alt="Digital intelligence visualization" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-neutral-950 relative">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 z-0">
          <img src={dataAnalysisImages[0]} alt="Data analysis abstract background" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-16"
          >
            <span className="text-primary">&lt;</span>
            <span>{getText(language, 'services.title')}</span>
            <span className="text-primary">&gt;</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service: any, index: number) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.desc}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Files Section */}
      <section id="cases" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-8 border-b pb-2 border-neutral-700 flex items-center"
          >
            <span className="text-primary mr-2">$</span>
            <span>{getText(language, 'cases.title')}</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 order-2 md:order-1"
            >
              <p className="text-gray-400 font-sans mb-6">
                {getText(language, 'cases.intro')}
              </p>
              
              <ul className="space-y-4">
                {caseItems.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start case-item bg-neutral-900 p-4 rounded border-l-2 border-primary"
                  >
                    {caseIcons[index]}
                    <span className="text-gray-300 font-sans">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-lg order-1 md:order-2"
            >
              {/* Cybersecurity Concept */}
              <img src={cybersecurityImages[1]} alt="Cybersecurity concept" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-neutral-950 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold text-center mb-12"
          >
            <span className="text-primary">[</span>
            <span>{getText(language, 'contact.title')}</span>
            <span className="text-primary">]</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-neutral-900 border-neutral-800 h-full">
                <CardContent className="p-8">
                  <ContactForm language={language} />
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-neutral-900 border-neutral-800 h-full">
                <CardContent className="p-8">
                  <div className="space-y-4 mb-6">
                    <p className="font-sans mb-2">
                      <span>{getText(language, 'contact.telegram')}</span> 
                      <a href="https://t.me/NullSig_" className="text-primary hover:underline ml-2">@NullSig_</a>
                    </p>
                    <p className="font-sans mb-2">
                      <span>{getText(language, 'contact.email')}</span>
                      <a href="mailto:nullsig@protonmail.com" className="text-primary hover:underline ml-2">nullsig@protonmail.com</a>
                    </p>
                  </div>
                  
                  {/* Digital Intelligence Visualization */}
                  <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                    <img src={digitalIntelligenceImages[1]} alt="Data analysis visualization" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                  </div>
                  
                  <p className="text-sm text-gray-500 font-sans italic">
                    {getText(language, 'contact.disclaimer')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black py-8 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="inline-block text-primary font-bold text-2xl tracking-widest mb-4 hover:animate-glow"
          >
            NullSig
          </a>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#about');
              }}
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              {getText(language, 'nav.about')}
            </a>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#services');
              }}
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              {getText(language, 'nav.services')}
            </a>
            <a 
              href="#cases" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#cases');
              }}
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              {getText(language, 'nav.cases')}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              {getText(language, 'nav.contact')}
            </a>
          </div>
          
          <div className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} NullSig. {getText(language, 'footer.rights')}
          </div>
        </div>
      </footer>
    </div>
  );
}
