import { useLang } from '@/context/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useLang();

  const channels = [
    {
      icon: <Instagram size={20} className="text-primary" />,
      label: '@tchedrakkiki',
      href: 'https://instagram.com/tchedrakkiki',
    },
    {
      icon: <Mail size={20} className="text-primary" />,
      label: 'kikitchedrak@gmail.com',
      href: 'mailto:kikitchedrak@gmail.com',
    },
    {
      icon: <MessageCircle size={20} className="text-primary" />,
      label: '+229 95 65 74 61',
      href: 'https://wa.me/22995657461',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-0 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Hook */}
        <AnimatedSection className="mb-8">
          <h2 className="font-display italic text-3xl md:text-5xl text-foreground leading-tight">
            {t(
              "Tu as une annonce qui stagne ? Envoie-la moi.",
              "Got a listing that's stagnating? Send it to me."
            )}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mb-12">
          <p className="text-foreground/60 font-body text-lg">
            {t(
              "Je te dis en 24h ce qui bloque — et comment le débloquer.",
              "I'll tell you in 24h what's blocking it — and how to fix it."
            )}
          </p>
        </AnimatedSection>

        {/* Main CTA */}
        <AnimatedSection delay={0.2} className="mb-16">
          <a
            href="https://linkedin.com/in/kikitchedrak"
            target="_blank"
            rel="noopener noreferrer"
            data-hoverable
            className="inline-block w-full sm:w-auto bg-primary text-primary-foreground px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
          >
            {t("Envoyer mon annonce sur LinkedIn", "Send my listing on LinkedIn")}
          </a>
        </AnimatedSection>

        {/* Other channels */}
        <AnimatedSection delay={0.3} className="mb-24">
          <div className="flex flex-col gap-4 items-center">
            {channels.map((ch, i) => (
              <a
                key={i}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                data-hoverable
                className="flex items-center gap-3 text-foreground/70 font-body hover:text-primary transition-colors"
              >
                {ch.icon}
                <span>{ch.label}</span>
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Closing */}
        <div className="bg-card py-8 -mx-6 px-6">
          <p className="font-mono text-xs text-primary uppercase tracking-widest text-center">
            L'Encre Immo by KIKI Tchédrak — {t("Les mots qui font signer.", "Words that make them sign.")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
