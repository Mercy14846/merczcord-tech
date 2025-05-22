import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-mercz-text-light hover:text-mercz-teal transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === i18n.language)?.name || 'English'}
        </span>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 mt-2 py-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-100 dark:border-gray-700"
          role="listbox"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                i18n.language === lang.code ? 'text-mercz-teal font-medium' : 'text-mercz-text-light'
              }`}
              role="option"
              aria-selected={i18n.language === lang.code}
            >
              {lang.name}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 