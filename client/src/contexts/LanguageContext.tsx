import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguageState(savedLang);
      document.documentElement.setAttribute("lang", savedLang);
      document.documentElement.setAttribute("dir", savedLang === "ar" ? "rtl" : "ltr");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Ramadan Medhat",
      title: "AI Student & Innovator",
      subtitle: "Passionate about Artificial Intelligence and building intelligent systems that shape the future",
      cta: "View My Work",
      share: "Share Portfolio",
      copied: "Link copied to clipboard!",
    },
    about: {
      title: "About Me",
      intro1: "I'm",
      intro2: ", a dedicated Information Technology student with a deep passion for Artificial Intelligence and its transformative potential.",
      intro3: "I specialize in building intelligent systems that solve real-world challenges using machine learning, deep learning, and data science. My journey in AI is driven by curiosity and a commitment to innovation.",
      education: {
        title: "Education",
        desc: "Faculty of Information Technology - AI Track",
      },
      specialization: {
        title: "Specialization",
        desc: "Artificial Intelligence & Machine Learning",
      },
      development: {
        title: "Development",
        desc: "Building Intelligent AI Solutions",
      },
      innovation: {
        title: "Innovation",
        desc: "Exploring Cutting-Edge Technologies",
      },
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies and tools I work with to build innovative AI solutions",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Explore my portfolio of AI and machine learning projects showcasing innovation and technical expertise",
      code: "Code",
      demo: "Demo",
      project1: {
        title: "AI Image Classifier",
        desc: "Advanced deep learning model using Convolutional Neural Networks (CNN) for multi-class image classification with 95% accuracy on complex datasets.",
      },
      project2: {
        title: "NLP Sentiment Analyzer",
        desc: "Sophisticated natural language processing tool leveraging transformer models to analyze sentiment in social media posts with contextual understanding.",
      },
      project3: {
        title: "Predictive Analytics Dashboard",
        desc: "Real-time business intelligence platform using machine learning algorithms to generate predictive insights and data-driven recommendations.",
      },
      project4: {
        title: "AI Chatbot Assistant",
        desc: "Intelligent conversational AI powered by large language models, designed for automated customer support with natural dialogue capabilities.",
      },
      project5: {
        title: "Computer Vision System",
        desc: "Real-time object detection and tracking system using YOLO architecture for security surveillance and automated monitoring applications.",
      },
      project6: {
        title: "Smart Recommendation Engine",
        desc: "Personalized content recommendation system combining collaborative filtering with deep learning for enhanced user experience.",
      },
    },
    contact: {
      title: "Let's Connect",
      subtitle: "I'm always excited to discuss new projects, innovative ideas, or opportunities to collaborate. Whether you have a question or just want to say hi, feel free to reach out!",
      email: {
        label: "Email",
        value: "ramadan.medhat@example.com",
      },
      linkedin: {
        label: "LinkedIn",
        value: "Connect with me",
      },
      github: {
        label: "GitHub",
        value: "View my code",
      },
      cta: "Start a Conversation",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "تواصل معي",
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "رمضان مدحت",
      title: "طالب ذكاء اصطناعي ومبتكر",
      subtitle: "شغوف بالذكاء الاصطناعي وبناء أنظمة ذكية تشكل المستقبل",
      cta: "شاهد أعمالي",
      share: "مشاركة السيرة الذاتية",
      copied: "تم نسخ الرابط!",
    },
    about: {
      title: "نبذة عني",
      intro1: "أنا",
      intro2: "، طالب تكنولوجيا معلومات متفاني ولدي شغف عميق بالذكاء الاصطناعي وإمكاناته التحويلية.",
      intro3: "أتخصص في بناء أنظمة ذكية تحل التحديات الواقعية باستخدام التعلم الآلي والتعلم العميق وعلوم البيانات. رحلتي في الذكاء الاصطناعي مدفوعة بالفضول والالتزام بالابتكار.",
      education: {
        title: "التعليم",
        desc: "كلية تكنولوجيا المعلومات - مسار الذكاء الاصطناعي",
      },
      specialization: {
        title: "التخصص",
        desc: "الذكاء الاصطناعي والتعلم الآلي",
      },
      development: {
        title: "التطوير",
        desc: "بناء حلول ذكاء اصطناعي متقدمة",
      },
      innovation: {
        title: "الابتكار",
        desc: "استكشاف التقنيات الحديثة",
      },
    },
    skills: {
      title: "المهارات التقنية",
      subtitle: "التقنيات والأدوات التي أستخدمها لبناء حلول الذكاء الاصطناعي المبتكرة",
    },
    projects: {
      title: "المشاريع المميزة",
      subtitle: "استكشف مجموعة مشاريع الذكاء الاصطناعي والتعلم الآلي التي تعرض الابتكار والخبرة التقنية",
      code: "الكود",
      demo: "العرض",
      project1: {
        title: "مصنف الصور بالذكاء الاصطناعي",
        desc: "نموذج تعلم عميق متقدم يستخدم الشبكات العصبية التلافيفية (CNN) لتصنيف الصور متعدد الفئات بدقة 95% على مجموعات البيانات المعقدة.",
      },
      project2: {
        title: "محلل المشاعر بمعالجة اللغة الطبيعية",
        desc: "أداة متطورة لمعالجة اللغة الطبيعية تستفيد من نماذج المحولات لتحليل المشاعر في منشورات وسائل التواصل الاجتماعي مع الفهم السياقي.",
      },
      project3: {
        title: "لوحة التحليلات التنبؤية",
        desc: "منصة ذكاء أعمال في الوقت الفعلي تستخدم خوارزميات التعلم الآلي لتوليد رؤى تنبؤية وتوصيات قائمة على البيانات.",
      },
      project4: {
        title: "مساعد الدردشة الذكي",
        desc: "ذكاء اصطناعي للمحادثة مدعوم بنماذج اللغة الكبيرة، مصمم لدعم العملاء التلقائي مع قدرات الحوار الطبيعي.",
      },
      project5: {
        title: "نظام الرؤية الحاسوبية",
        desc: "نظام اكتشاف وتتبع الكائنات في الوقت الفعلي باستخدام بنية YOLO لمراقبة الأمن وتطبيقات المراقبة الآلية.",
      },
      project6: {
        title: "محرك التوصيات الذكي",
        desc: "نظام توصيات محتوى مخصص يجمع بين التصفية التعاونية والتعلم العميق لتحسين تجربة المستخدم.",
      },
    },
    contact: {
      title: "لنتواصل",
      subtitle: "أنا دائماً متحمس لمناقشة المشاريع الجديدة أو الأفكار المبتكرة أو فرص التعاون. سواء كان لديك سؤال أو تريد فقط أن تقول مرحباً، لا تتردد في التواصل!",
      email: {
        label: "البريد الإلكتروني",
        value: "ramadan.medhat@example.com",
      },
      linkedin: {
        label: "لينكد إن",
        value: "تواصل معي",
      },
      github: {
        label: "جيت هاب",
        value: "شاهد الكود",
      },
      cta: "ابدأ محادثة",
    },
  },
};
