import { useLang } from '@/context/LanguageContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'accueil', fr: 'Accueil', en: 'Home' },
  { id: 'projets', fr: 'Projets', en: 'Work' },
  { id: 'a-propos', fr: 'À propos', en: 'About' },
  { id: 'services', fr: 'Services', en: 'Services' },
  { id: 'faq', fr: 'FAQ', en: 'FAQ' },
  { id: 'contact', fr: 'Contact', en: 'Contact' },
];

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('accueil')} className="flex items-center gap-3 nav-reset" data-hoverable>
          <span className="font-display italic text-2xl text-primary font-bold">KT</span>
          <span className="text-foreground/70 text-xs uppercase tracking-[0.2em] font-body hidden sm:block">
            L'Encre Immo
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              data-hoverable
              className="relative flex flex-col items-center group text-foreground/70 hover:text-foreground transition-colors nav-reset"
            >
              <span className="text-sm font-body">{lang === 'fr' ? item.fr : item.en}</span>
              <span className="text-[10px] text-primary/60 font-mono">
                {lang === 'fr' ? item.en : item.fr}
              </span>
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs font-mono">
            <button onClick={() => setLang('fr')} data-hoverable className={`px-1.5 py-0.5 transition-colors nav-reset ${lang === 'fr' ? 'text-primary border-b border-primary' : 'text-foreground/40 hover:text-foreground/70'}`}>FR</button>
            <span className="text-foreground/20">|</span>
            <button onClick={() => setLang('en')} data-hoverable className={`px-1.5 py-0.5 transition-colors nav-reset ${lang === 'en' ? 'text-primary border-b border-primary' : 'text-foreground/40 hover:text-foreground/70'}`}>EN</button>
          </div>
          <a href="https://linkedin.com/in/kikitchedrak" target="_blank" rel="noopener noreferrer" data-hoverable className="hidden md:block premium-btn !text-xs !py-2 !px-4 hover:bg-primary-foreground transition-all rounded-xl">
            {t("Auditer mon annonce", "Audit my listing")}
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground nav-reset" data-hoverable>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden">
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="text-lg font-display text-foreground/70 text-left">
                  {lang === 'fr' ? item.fr : item.en}
                </button>
              ))}
              <a href="https://linkedin.com/in/kikitchedrak" target="_blank" rel="noopener noreferrer" className="premium-btn w-full mt-2">
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
