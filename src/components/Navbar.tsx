import { Link, useLocation } from 'react-router-dom';
import { useLang } from '@/context/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', fr: 'Accueil', en: 'Home' },
  { path: '/projets', fr: 'Projets', en: 'Work' },
  { path: '/a-propos', fr: 'À propos', en: 'About' },
  { path: '/services', fr: 'Services', en: 'Services' },
  { path: '/contact', fr: 'Contact', en: 'Contact' },
];

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" data-hoverable>
          <span className="font-display italic text-2xl text-primary font-bold">KT</span>
          <span className="text-foreground/70 text-xs uppercase tracking-[0.2em] font-body hidden sm:block">
            L'Encre Immo
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              data-hoverable
              className={`relative flex flex-col items-center group ${
                location.pathname === item.path ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
              } transition-colors`}
            >
              <span className="text-sm font-body">{lang === 'fr' ? item.fr : item.en}</span>
              <span className="text-[10px] text-primary/60 font-mono">
                {lang === 'fr' ? item.en : item.fr}
              </span>
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Lang toggle */}
          <div className="flex items-center gap-1 text-xs font-mono">
            <button
              onClick={() => setLang('fr')}
              data-hoverable
              className={`px-1.5 py-0.5 transition-colors ${
                lang === 'fr' ? 'text-primary border-b border-primary' : 'text-foreground/40 hover:text-foreground/70'
              }`}
            >
              FR
            </button>
            <span className="text-foreground/20">|</span>
            <button
              onClick={() => setLang('en')}
              data-hoverable
              className={`px-1.5 py-0.5 transition-colors ${
                lang === 'en' ? 'text-primary border-b border-primary' : 'text-foreground/40 hover:text-foreground/70'
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <a
            href="https://linkedin.com/in/kikitchedrak"
            target="_blank"
            rel="noopener noreferrer"
            data-hoverable
            className="hidden md:block border border-primary text-primary px-4 py-2 text-xs uppercase tracking-wider font-mono hover:bg-primary hover:text-primary-foreground transition-all animate-gold-pulse"
          >
            {t("Auditer mon annonce", "Audit my listing")}
          </a>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground"
            data-hoverable
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg font-display ${
                    location.pathname === item.path ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {lang === 'fr' ? item.fr : item.en}
                </Link>
              ))}
              <a
                href="https://linkedin.com/in/kikitchedrak"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-4 py-2 text-xs uppercase tracking-wider font-mono text-center hover:bg-primary hover:text-primary-foreground transition-all mt-2"
              >
                {t("Auditer mon annonce", "Audit my listing")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
