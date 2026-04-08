import { useLang } from '@/context/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import CounterNumber from '@/components/CounterNumber';

const About = () => {
  const { t } = useLang();

  const services = [
    { fr: "Réécriture d'annonces immobilières", en: "Real estate listing rewrite" },
    { fr: "Emails de prospection vendeurs", en: "Seller prospecting emails" },
    { fr: "Pages de capture", en: "Capture pages" },
    { fr: "Scripts LinkedIn", en: "LinkedIn scripts" },
  ];

  const sectorStats = [
    {
      stat: '12% vs 4,7%',
      labelFr: "Taux de conversion des annonces optimisées",
      labelEn: "Conversion rate: optimized vs. industry average",
      quoteFr: "Une annonce bien écrite ne double pas les résultats. Elle les triple.",
      quoteEn: "A well-written listing doesn't double results. It triples them.",
    },
    {
      stat: '15 sec',
      labelFr: "Pour convaincre ou perdre un lecteur",
      labelEn: "To convince or lose a reader",
      quoteFr: "Ton accroche est ton seul rendez-vous. Rate-la et c'est terminé.",
      quoteEn: "Your hook is your only appointment. Miss it and it's over.",
    },
    {
      stat: 'Top 3 ROI',
      labelFr: "Email immobilier tous secteurs confondus",
      labelEn: "Real estate email ROI — all sectors",
      quoteFr: "L'email n'est pas mort. Il dort chez ceux qui ne savent pas l'écrire.",
      quoteEn: "Email isn't dead. It's sleeping for those who can't write it.",
    },
    {
      stat: '×3,5',
      labelFr: "SEO immobilier vs publicité payante",
      labelEn: "Real estate SEO vs. paid ads",
      quoteFr: "Payer pour exister ou écrire pour durer. Les deux ne sont pas équivalents.",
      quoteEn: "Pay to exist or write to last. They're not the same.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Quote */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
          <AnimatedSection>
            {/* Abstract visual */}
            <div className="aspect-square bg-card rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-primary/20 rotate-45" />
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/10 rotate-12" />
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <blockquote className="font-display italic text-2xl md:text-3xl text-foreground leading-snug">
              {t(
                "Je ne suis pas agent immobilier. Je suis celui qui fait sonner le téléphone des agents immobiliers.",
                "I'm not a real estate agent. I'm the one who makes real estate agents' phones ring."
              )}
            </blockquote>
            <p className="text-foreground/60 font-body mt-6 leading-relaxed">
              {t(
                "KIKI Tchédrak — Copywriter immobilier. Spécialiste en réécriture d'annonces, prospection email et conversion digitale pour les conseillers indépendants.",
                "KIKI Tchédrak — Real estate copywriter. Specialist in listing rewrites, email prospecting, and digital conversion for independent advisors."
              )}
            </p>
          </AnimatedSection>
        </section>

        {/* Services List */}
        <AnimatedSection className="mb-24">
          <h3 className="font-display text-2xl text-foreground mb-8">
            {t("Ce que je fais", "What I do")}
          </h3>
          <div className="flex flex-col gap-4">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-center gap-4 text-foreground/80 font-body text-lg">
                  <span className="text-primary">—</span>
                  {t(s.fr, s.en)}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* What I don't do */}
        <AnimatedSection className="mb-24 text-center">
          <p className="font-display italic text-2xl md:text-3xl text-foreground mb-4">
            {t("Je ne fais pas du joli. Je fais du rentable.", "I don't do pretty. I do profitable.")}
          </p>
          <p className="font-display italic text-2xl md:text-3xl text-foreground/70">
            {t("Je ne travaille pas avec tout le monde.", "I don't work with everyone.")}
          </p>
        </AnimatedSection>

        {/* Sector Data */}
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectorStats.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card border-t-2 border-primary p-6">
                  <span className="font-mono text-primary text-2xl font-bold">{s.stat}</span>
                  <p className="text-foreground/60 font-body text-sm mt-2">{t(s.labelFr, s.labelEn)}</p>
                  <p className="text-foreground/50 font-display italic text-sm mt-3 border-t border-border/30 pt-3">
                    "{t(s.quoteFr, s.quoteEn)}"
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
