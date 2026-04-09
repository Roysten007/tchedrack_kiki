import { useLang } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-border/30 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-xs font-body text-foreground/40">
          © {new Date().getFullYear()} L'Encre Immo by KIKI Tchédrak
        </span>
        <span className="text-xs font-body text-foreground/40 italic">
          {t("Les mots qui font signer.", "Words that make them sign.")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
