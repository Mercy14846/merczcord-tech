import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('common.home'), href: "#home" },
    { name: t('common.services'), href: "#services" },
    { name: t('common.about'), href: "#about" },
    { name: t('common.contact'), href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 lg:px-12",
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-subtle dark:bg-gray-900/80"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img 
            src="/assets/merczcord-logo.png" 
            alt="Merczcord Logo" 
            className="h-10 md:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-mercz-text-light hover:text-mercz-teal transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-mercz-teal text-white py-2 px-4 rounded-md hover:bg-mercz-teal-light transition-colors duration-200 text-sm font-medium"
          >
            {t('common.getInTouch')}
          </a>
          
          {/* Theme toggle and language switcher */}
          <div className="flex items-center space-x-4 ml-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="text-mercz-text dark:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            "absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden dark:bg-gray-900/95",
            isMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="flex flex-col px-6 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 text-mercz-text-light hover:text-mercz-teal transition-colors duration-200 text-sm font-medium border-b border-gray-100 dark:border-gray-800 last:border-none"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 bg-mercz-teal text-center text-white py-2 px-4 rounded-md hover:bg-mercz-teal-light transition-colors duration-200 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('common.getInTouch')}
            </a>
            <div className="mt-6 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
