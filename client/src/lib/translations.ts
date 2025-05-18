// Translations for English and Ukrainian
export type Language = 'en' | 'uk';

export interface TranslationItem {
  nav: {
    home: string;
    about: string;
    services: string;
    cases: string;
    contact: string;
  };
  hero: {
    title: string;
    tagline: string;
    subtitle: string;
    button: string;
  };
  about: {
    title: string;
    description: string;
    quote: string;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };
  cases: {
    title: string;
    intro: string;
    items: string[];
  };
  contact: {
    title: string;
    telegram: string;
    email: string;
    name: string;
    message: string;
    submit: string;
    success: string;
    successMessage: string;
    disclaimer: string;
    required: string;
    invalidEmail: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Language, TranslationItem> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      cases: "Case Files",
      contact: "Contact"
    },
    hero: {
      title: "NullSig",
      tagline: "There is no signal. Only traces.",
      subtitle: "HIDDEN INTELLIGENCE",
      button: "Explore Services"
    },
    about: {
      title: "About NullSig",
      description: "NullSig (Null Signature) is an independent OSINT project built on the principle of zero signal: observe without interference, collect without exposure. Our team consists of former military intelligence operatives and special service analysts, bringing real-world expertise in surveillance and digital forensics. We operate in the gray zone — ethically, strategically, and precisely.",
      quote: "Those who leave traces end up in reports. Those who detect them shape outcomes."
    },
    services: {
      title: "Our Services",
      items: [
        {
          title: "Subject Profiling",
          desc: "Search by name, phone, email, national ID, and social media.",
          icon: "user-search"
        },
        {
          title: "Partner / Employee Screening",
          desc: "Background, affiliations, reputation risk.",
          icon: "badge-check"
        },
        {
          title: "OSINT Reports",
          desc: "PDF/PPTX reports with verified sources and risk conclusions.",
          icon: "file-text"
        },
        {
          title: "Digital Footprint Analysis",
          desc: "Accounts, activities, leaks, metadata pattern recognition.",
          icon: "fingerprint"
        },
        {
          title: "Custom Intelligence Requests",
          desc: "Tailored investigations using open-source intelligence.",
          icon: "clipboard-check"
        }
      ]
    },
    cases: {
      title: "Case Files",
      intro: "We don't reveal clients. But we show what our methods can do.",
      items: [
        "Linked businesses uncovered via shared phone signatures",
        "Timeline reconstruction through social media echo trails",
        "Tracking aliases across platforms without direct matches"
      ]
    },
    contact: {
      title: "Contact",
      telegram: "Telegram:",
      email: "Email:",
      name: "Name",
      message: "Message",
      submit: "Submit Request",
      success: "Message Received",
      successMessage: "Thank you for your inquiry. We'll respond through secure channels.",
      disclaimer: "All intelligence is collected through open sources. No unauthorized access. No illegal activity.",
      required: "Please fill in all required fields",
      invalidEmail: "Please enter a valid email address"
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  uk: {
    nav: {
      home: "Головна",
      about: "Про нас",
      services: "Послуги",
      cases: "Кейси",
      contact: "Контакти"
    },
    hero: {
      title: "NullSig",
      tagline: "Немає сигналу. Тільки сліди.",
      subtitle: "ПРИХОВАНА РОЗВІДКА",
      button: "Дослідити послуги"
    },
    about: {
      title: "Про NullSig",
      description: "NullSig (Нульовий Підпис) — це незалежний OSINT проект, побудований на принципі нульового сигналу: спостерігати без втручання, збирати без виявлення. Наша команда складається з колишніх військових розвідників та аналітиків спецслужб, які мають реальний досвід у спостереженні та цифровій криміналістиці. Ми працюємо в сірій зоні — етично, стратегічно та точно.",
      quote: "Ті, хто залишають сліди, потрапляють у звіти. Ті, хто їх виявляють, формують результати."
    },
    services: {
      title: "Наші послуги",
      items: [
        {
          title: "Профілювання суб'єктів",
          desc: "Пошук за іменем, телефоном, електронною поштою, ID та соціальними мережами.",
          icon: "user-search"
        },
        {
          title: "Перевірка партнерів / співробітників",
          desc: "Фон, зв'язки, репутаційні ризики.",
          icon: "badge-check"
        },
        {
          title: "OSINT звіти",
          desc: "PDF/PPTX звіти з перевіреними джерелами та висновками про ризики.",
          icon: "file-text"
        },
        {
          title: "Аналіз цифрового сліду",
          desc: "Акаунти, активність, витоки, розпізнавання метаданих.",
          icon: "fingerprint"
        },
        {
          title: "Індивідуальні запити розвідки",
          desc: "Розслідування на замовлення з використанням відкритих джерел.",
          icon: "clipboard-check"
        }
      ]
    },
    cases: {
      title: "Кейси",
      intro: "Ми не розкриваємо клієнтів. Але показуємо, на що здатні наші методи.",
      items: [
        "Пов'язані бізнеси виявлені через спільні телефонні сигнатури",
        "Реконструкція таймлайну через відгомін у соцмережах",
        "Відстеження псевдонімів на різних платформах без прямих співпадінь"
      ]
    },
    contact: {
      title: "Контакти",
      telegram: "Телеграм:",
      email: "Пошта:",
      name: "Ім'я",
      message: "Повідомлення",
      submit: "Надіслати запит",
      success: "Повідомлення отримано",
      successMessage: "Дякуємо за ваш запит. Ми відповімо через захищені канали.",
      disclaimer: "Вся інформація збирається з відкритих джерел. Без несанкціонованого доступу. Без незаконної діяльності.",
      required: "Будь ласка, заповніть всі обов'язкові поля",
      invalidEmail: "Будь ласка, введіть дійсну email адресу"
    },
    footer: {
      rights: "Всі права захищені."
    }
  }
};

export function getText(lang: Language, path: string): string {
  const keys = path.split('.');
  let result: any = translations[lang];
  
  for (const key of keys) {
    if (result === undefined) return `[${path}]`;
    result = result[key];
  }
  
  return result || `[${path}]`;
}
