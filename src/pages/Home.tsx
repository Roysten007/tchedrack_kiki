import { useLang } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';
import CounterNumber from '@/components/CounterNumber';

const Home = () => {
  const { t } = useLang();

  const stats = [
    { value: 4, prefix: '×', suffix: '', labelFr: 'Contacts qualifiés · segment luxe', labelEn: 'Qualified contacts · luxury segment' },
    { value: 400, prefix: '+', suffix: '%', labelFr: "Appels sur un bien stagnant", labelEn: "Calls on a stagnant listing" },
    { value: 6, prefix: '', suffix: '', labelFr: "Jours pour décrocher une première offre", labelEn: "Days to receive a first offer" },
    { value: 14, prefix: '', suffix: '', labelFr: "Contacts/semaine contre 4 avant", labelEn: "Contacts/week vs 4 before" },
  ];

  const problems = [
    {
      fr: "Ton annonce est en ligne depuis 3 semaines. Les vues sont là. Le téléphone ne sonne pas.",
      en: "Your listing has been live for 3 weeks. The views are there. The phone isn't ringing.",
    },
    {
      fr: "Tu as baissé le prix. Toujours rien. Pourtant le bien est correct.",
      en: "You dropped the price. Still nothing. Yet the property is fine.",
    },
    {
      fr: "Tu publies comme tout le monde. Et tu obtiens les mêmes résultats que tout le monde.",
      en: "You post like everyone else. And you get the same results as everyone else.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 noise-bg overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <AnimatedSection>
            <div className="inline-block border border-primary/40 px-4 py-2 font-mono text-xs text-primary/80 uppercase tracking-widest">
              + 1 an · 3 segments · Paris · Tours · Cannes
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-display italic font-semibold text-foreground leading-[1.1]" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
              {t("Les mots qui font signer.", "Words that make them sign.")}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-foreground/70 font-body text-lg md:text-xl max-w-2xl leading-relaxed">
              {t(
                "J'aide les conseillers immobiliers à transformer leurs annonces en machines à visites — sans changer le bien, sans baisser le prix.",
                "I help real estate advisors turn their listings into visit-generating machines — without changing the property, without dropping the price."
              )}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <a
              href="https://linkedin.com/in/kikitchedrak"
              target="_blank"
              rel="noopener noreferrer"
              data-hoverable
              className="inline-block bg-primary text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              {t("Envoie-moi ton annonce à auditer", "Send me your listing to audit")}
            </a>
          </AnimatedSection>

          <div className="mt-12 scroll-indicator h-12 overflow-hidden" />
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="bg-card py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center flex flex-col gap-2">
              <CounterNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <span className="text-foreground/60 font-body text-sm">
                {t(stat.labelFr, stat.labelEn)}
              </span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">
              {t("LE PROBLÈME", "THE PROBLEM")}
            </span>
          </AnimatedSection>

          <div className="mt-12 flex flex-col gap-6">
            {problems.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card border-l-2 border-destructive p-6 md:p-8">
                  <p className="font-display italic text-foreground/90 text-lg md:text-xl leading-relaxed">
                    "{t(p.fr, p.en)}"
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <p className="font-display italic text-primary text-2xl md:text-3xl font-semibold">
              {t(
                "Le problème n'est pas le bien. C'est le texte.",
                "The problem isn't the property. It's the copy."
              )}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intermediate CTA */}
      <AnimatedSection className="py-16 text-center">
        <Link
          to="/projets"
          data-hoverable
          className="inline-block border border-primary text-primary px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
        >
          {t("Voir comment ça fonctionne →", "See how it works →")}
        </Link>
      </AnimatedSection>
    </div>
  );
};

export default Home;
