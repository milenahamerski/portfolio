import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "Hello, I am Milena!",
      subtext:
        "I am a developer with a passion for design and a newcomer to the 3D design world. My goal is to blend developer techniques with design and creativity in my work.",
      home: "Home",
      about: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      socials: "Socials",
    },
  },
  fr: {
    message: {
      hello: "Bonjour, je suis Milena!",
      subtext:
        "Je suis développeuse avec une passion pour le design et une novice dans le monde du design 3D. Mon objectif est de combiner les techniques de développement avec la créativité dans mon travail.",
      home: "Accueil",
      about: "À propos",
      portfolio: "Portfolio",
      socials: "Réseaux",
    },
  },
  pt: {
    message: {
      hello: "Bonjour, je suis Milena!",
      subtext:
        "Je suis développeuse avec une passion pour le design et une novice dans le monde du design 3D. Mon objectif est de combiner les techniques de développement avec la créativité dans mon travail.",
      home: "Home",
      about: "À propos",
      portfolio: "Portfolio",
      socials: "Réseaux",
    },
  },
};

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
