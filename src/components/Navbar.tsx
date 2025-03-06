
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 lg:px-12",
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-subtle"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="text-mercz-text font-display text-2xl font-semibold tracking-tight"
        >
          Merczcord<span className="text-mercz-blue">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-mercz-text-light hover:text-mercz-blue transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-mercz-blue text-white py-2 px-4 rounded-md hover:bg-mercz-blue-dark transition-colors duration-200 text-sm font-medium"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-mercz-text"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            "absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-60" : "max-h-0"
          )}
        >
          <div className="flex flex-col px-6 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 text-mercz-text-light hover:text-mercz-blue transition-colors duration-200 text-sm font-medium border-b border-gray-100 last:border-none"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 bg-mercz-blue text-center text-white py-2 px-4 rounded-md hover:bg-mercz-blue-dark transition-colors duration-200 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
