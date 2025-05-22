import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  common: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    getInTouch: 'Get in Touch',
    backToTop: 'Back to top',
    subscribe: 'Subscribe',
    yourEmail: 'Your email',
    copyright: '© {{year}} Merczcord Technologies. All rights reserved.',
  },
  services: {
    title: 'Our Services',
    urbanPlanning: 'Urban Planning',
    transportation: 'Transportation Planning',
    disaster: 'Disaster Management',
    navigation: 'Navigation Systems',
    environmental: 'Environmental Assessment',
    mapping: 'Mapping Services',
  },
  about: {
    title: 'About Us',
    description: 'Empowering communities and organizations with precise geospatial solutions for sustainable development and resilient urban planning.',
  },
  contact: {
    title: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    success: 'Your message has been sent successfully!',
    error: 'There was an error sending your message. Please try again.',
  },
};

// Spanish translations
const esTranslations = {
  common: {
    home: 'Inicio',
    services: 'Servicios',
    about: 'Nosotros',
    contact: 'Contacto',
    getInTouch: 'Contáctanos',
    backToTop: 'Volver arriba',
    subscribe: 'Suscribirse',
    yourEmail: 'Tu correo electrónico',
    copyright: '© {{year}} Merczcord Technologies. Todos los derechos reservados.',
  },
  services: {
    title: 'Nuestros Servicios',
    urbanPlanning: 'Planificación Urbana',
    transportation: 'Planificación de Transporte',
    disaster: 'Gestión de Desastres',
    navigation: 'Sistemas de Navegación',
    environmental: 'Evaluación Ambiental',
    mapping: 'Servicios de Cartografía',
  },
  about: {
    title: 'Sobre Nosotros',
    description: 'Empoderando comunidades y organizaciones con soluciones geoespaciales precisas para el desarrollo sostenible y la planificación urbana resiliente.',
  },
  contact: {
    title: 'Contáctanos',
    name: 'Nombre',
    email: 'Correo electrónico',
    message: 'Mensaje',
    send: 'Enviar Mensaje',
    success: '¡Tu mensaje ha sido enviado con éxito!',
    error: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.',
  },
};

// French translations
const frTranslations = {
  common: {
    home: 'Accueil',
    services: 'Services',
    about: 'À Propos',
    contact: 'Contact',
    getInTouch: 'Nous Contacter',
    backToTop: 'Retour en Haut',
    subscribe: 'S\'abonner',
    yourEmail: 'Votre email',
    copyright: '© {{year}} Merczcord Technologies. Tous droits réservés.',
  },
  services: {
    title: 'Nos Services',
    urbanPlanning: 'Planification Urbaine',
    transportation: 'Planification des Transports',
    disaster: 'Gestion des Catastrophes',
    navigation: 'Systèmes de Navigation',
    environmental: 'Évaluation Environnementale',
    mapping: 'Services de Cartographie',
  },
  about: {
    title: 'À Propos de Nous',
    description: 'Autonomiser les communautés et les organisations avec des solutions géospatiales précises pour le développement durable et la planification urbaine résiliente.',
  },
  contact: {
    title: 'Contactez-Nous',
    name: 'Nom',
    email: 'Email',
    message: 'Message',
    send: 'Envoyer le Message',
    success: 'Votre message a été envoyé avec succès!',
    error: 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.',
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslations,
      es: esTranslations,
      fr: frTranslations,
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n; 