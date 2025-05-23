import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    {
      title: t('about'),
      links: [
        { name: t('about'), href: "#about" },
        { name: t('services'), href: "#services" },
        { name: "Team", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "FAQ", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <img 
                src="/assets/merczcord-logo.png" 
                alt="Merczcord Logo" 
                className="h-12"
              />
            </a>
            <p className="text-mercz-text-light dark:text-gray-300 mb-6 max-w-md">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 text-mercz-text-light hover:text-mercz-teal transition-colors dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="p-2 text-mercz-text-light hover:text-mercz-teal transition-colors dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="p-2 text-mercz-text-light hover:text-mercz-teal transition-colors dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="p-2 text-mercz-text-light hover:text-mercz-teal transition-colors dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx} className="md:col-span-1">
              <h4 className="text-mercz-text dark:text-white font-medium mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-mercz-text-light hover:text-mercz-teal transition-colors text-sm dark:text-gray-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <h4 className="text-mercz-text dark:text-white font-medium mb-4">Newsletter</h4>
            <p className="text-mercz-text-light dark:text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('your Email')}
                className="py-2 px-3 rounded-l-md bg-mercz-neutral dark:bg-gray-800 border border-r-0 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-mercz-teal text-sm flex-grow text-mercz-text dark:text-white"
              />
              <button className="bg-mercz-teal text-white py-2 px-3 rounded-r-md text-sm hover:bg-mercz-teal-light transition-colors">
                {t('subscribe')}
              </button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-mercz-text-light dark:text-gray-300 text-sm">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-mercz-text-light dark:text-gray-300 hover:text-mercz-teal transition-colors"
          >
            <span className="mr-2 text-sm">{t('backToTop')}</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
