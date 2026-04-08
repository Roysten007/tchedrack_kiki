import { useLang } from '@/context/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import CounterNumber from '@/components/CounterNumber';
import { motion } from 'framer-motion';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

const Index = () => {
  const { t, lang } = useLang();

  const stats = [
    { value: 4, prefix: '×', suffix: '', labelFr: 'Contacts qualifiés · segment luxe', labelEn: 'Qualified contacts · luxury segment' },
    { value: 400, prefix: '+', suffix: '%', labelFr: "Appels sur un bien stagnant", labelEn: "Calls on a stagnant listing" },
    { value: 6, prefix: '', suffix: '', labelFr: "Jours pour décrocher une première offre", labelEn: "Days to receive a first offer" },
    { value: 14, prefix: '', suffix: '', labelFr: "Contacts/semaine contre 4 avant", labelEn: "Contacts/week vs 4 before" },
  ];

  const problems = [
    { fr: "Ton annonce est en ligne depuis 3 semaines. Les vues sont là. Le téléphone ne sonne pas.", en: "Your listing has been live for 3 weeks. The views are there. The phone isn't ringing." },
    { fr: "Tu as baissé le prix. Toujours rien. Pourtant le bien est correct.", en: "You dropped the price. Still nothing. Yet the property is fine." },
    { fr: "Tu publies comme tout le monde. Et tu obtiens les mêmes résultats que tout le monde.", en: "You post like everyone else. And you get the same results as everyone else." },
  ];

  const caseStudies = [
    {
      eyebrowFr: 'APPARTEMENT · PARIS 15E · RÉSIDENTIEL', eyebrowEn: 'APARTMENT · PARIS 15TH · RESIDENTIAL',
      steps: [
        { type: 'before' as const, fr: '4 contacts/semaine · 22 jours sans offre', en: '4 contacts/week · 22 days without offer' },
        { type: 'intervention' as const, fr: 'Projection mentale + 3 filtres acheteur en 5 secondes', en: 'Mental projection + 3 buyer filters in 5 seconds' },
        { type: 'after' as const, fr: '14 contacts/semaine · Première offre en 6 jours', en: '14 contacts/week · First offer in 6 days' },
        { type: 'insight' as const, fr: "Une annonce ne doit pas décrire un bien. Elle doit déclencher une visite.", en: "A listing shouldn't describe a property. It should trigger a visit." },
      ],
    },
    {
      eyebrowFr: 'MAISON · TOURS NORD · RÉSIDENTIEL DYNAMIQUE', eyebrowEn: 'HOUSE · TOURS NORTH · DYNAMIC RESIDENTIAL',
      steps: [
        { type: 'before' as const, fr: '1 appel/semaine · 3 semaines de stagnation', en: '1 call/week · 3 weeks stagnating' },
        { type: 'intervention' as const, fr: 'Ouverture sensorielle + preuve sociale + urgence authentique', en: 'Sensory opening + social proof + authentic urgency' },
        { type: 'after' as const, fr: "+400% d'appels · +333% de vues · 5 appels/semaine", en: '+400% calls · +333% views · 5 calls/week' },
        { type: 'insight' as const, fr: "L'émotion ouvre. La raison convainc. Les deux ensemble font signer.", en: 'Emotion opens. Reason convinces. Both together make them sign.' },
      ],
    },
    {
      eyebrowFr: 'VILLA · CANNES · LUXE · 1 250 000€', eyebrowEn: 'VILLA · CANNES · LUXURY · €1,250,000',
      steps: [
        { type: 'before' as const, fr: '0 visite sérieuse · 45 jours · 1 250 000€', en: '0 serious visit · 45 days · €1,250,000' },
        { type: 'intervention' as const, fr: 'Ton souverain · Exclusivité · Visites sur dossier', en: 'Sovereign tone · Exclusivity · Visits by appointment' },
        { type: 'after' as const, fr: '×4 contacts qualifiés/mois · Première visite sérieuse en 11 jours', en: '×4 qualified contacts/month · First serious visit in 11 days' },
        { type: 'insight' as const, fr: "Le luxe ne se vend pas. Il se révèle. Le texte est le rideau.", en: "Luxury isn't sold. It's revealed. The copy is the curtain." },
      ],
    },
  ];

  const stepConfig = {
    before: { label: { fr: 'AVANT', en: 'BEFORE' }, color: 'bg-destructive' },
    intervention: { label: { fr: 'INTERVENTION', en: 'INTERVENTION' }, color: 'bg-primary' },
    after: { label: { fr: 'APRÈS', en: 'AFTER' }, color: 'bg-green-600' },
    insight: { label: { fr: 'INSIGHT', en: 'INSIGHT' }, color: 'bg-primary' },
  };

  const aboutServices = [
    { fr: "Réécriture d'annonces immobilières", en: "Real estate listing rewrite" },
    { fr: "Emails de prospection vendeurs", en: "Seller prospecting emails" },
    { fr: "Pages de capture", en: "Capture pages" },
    { fr: "Scripts LinkedIn", en: "LinkedIn scripts" },
  ];

  const sectorStats = [
    { stat: '12% vs 4,7%', labelFr: "Taux de conversion des annonces optimisées", labelEn: "Conversion rate: optimized vs. industry average", quoteFr: "Une annonce bien écrite ne double pas les résultats. Elle les triple.", quoteEn: "A well-written listing doesn't double results. It triples them." },
    { stat: '15 sec', labelFr: "Pour convaincre ou perdre un lecteur", labelEn: "To convince or lose a reader", quoteFr: "Ton accroche est ton seul rendez-vous. Rate-la et c'est terminé.", quoteEn: "Your hook is your only appointment. Miss it and it's over." },
    { stat: 'Top 3 ROI', labelFr: "Email immobilier tous secteurs confondus", labelEn: "Real estate email ROI — all sectors", quoteFr: "L'email n'est pas mort. Il dort chez ceux qui ne savent pas l'écrire.", quoteEn: "Email isn't dead. It's sleeping for those who can't write it." },
    { stat: '×3,5', labelFr: "SEO immobilier vs publicité payante", labelEn: "Real estate SEO vs. paid ads", quoteFr: "Payer pour exister ou écrire pour durer. Les deux ne sont pas équivalents.", quoteEn: "Pay to exist or write to last. They're not the same." },
  ];

  const serviceCards = [
    { titleFr: "Audit + Réécriture d'annonce", titleEn: "Listing Audit + Rewrite", whatFr: "J'analyse ton annonce existante et la réécris intégralement.", whatEn: "I analyze your existing listing and rewrite it entirely.", changeFr: "Plus de contacts qualifiés. Un téléphone qui sonne.", changeEn: "More qualified contacts. A phone that rings.", whoFr: "Conseiller avec une annonce qui stagne.", whoEn: "Advisor with a stagnating listing." },
    { titleFr: "Séquence email prospection vendeurs", titleEn: "Seller Prospecting Email Sequence", whatFr: "3 à 5 emails pour transformer un vendeur froid en rendez-vous.", whatEn: "3–5 emails to turn a cold seller into an appointment.", changeFr: "Un pipeline actif, sans relances maladroites.", changeEn: "An active pipeline, without awkward follow-ups.", whoFr: "Mandataire qui prospecte mais ne convertit pas.", whoEn: "Advisor who prospects but doesn't convert." },
    { titleFr: "Page de capture", titleEn: "Capture Page", whatFr: "Une page qui capte des leads vendeurs ou acheteurs qualifiés.", whatEn: "A page that captures qualified seller or buyer leads.", changeFr: "Moins de trafic perdu, plus de contacts concrets.", changeEn: "Less lost traffic, more concrete contacts.", whoFr: "Conseiller avec une présence digitale à monétiser.", whoEn: "Advisor with a digital presence to monetize." },
    { titleFr: "Script LinkedIn", titleEn: "LinkedIn Script", whatFr: "Un message d'approche calibré pour LinkedIn.", whatEn: "A calibrated outreach message for LinkedIn.", changeFr: "Des réponses. Pas des silences.", changeEn: "Responses. Not silence.", whoFr: "Conseiller qui prospecte sur LinkedIn sans résultats.", whoEn: "Advisor prospecting on LinkedIn without results." },
  ];

  const channels = [
    { icon: <Instagram size={20} className="text-primary" />, label: '@tchedrakkiki', href: 'https://instagram.com/tchedrakkiki' },
    { icon: <Mail size={20} className="text-primary" />, label: 'kikitchedrak@gmail.com', href: 'mailto:kikitchedrak@gmail.com' },
    { icon: <MessageCircle size={20} className="text-primary" />, label: '+229 95 65 74 61', href: 'https://wa.me/22995657461' },
  ];

  return (
    <div className="min-h-screen">
      {/* ===== HERO ===== */}
      <section id="accueil" className="relative min-h-screen flex flex-col items-center justify-center px-6 noise-bg overflow-hidden">
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
              {t("J'aide les conseillers immobiliers à transformer leurs annonces en machines à visites — sans changer le bien, sans baisser le prix.", "I help real estate advisors turn their listings into visit-generating machines — without changing the property, without dropping the price.")}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <a href="https://linkedin.com/in/kikitchedrak" target="_blank" rel="noopener noreferrer" data-hoverable className="inline-block bg-primary text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-gold-light transition-colors">
              {t("Envoie-moi ton annonce à auditer", "Send me your listing to audit")}
            </a>
          </AnimatedSection>
          <div className="mt-12 scroll-indicator h-12 overflow-hidden" />
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="bg-card py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="text-center flex flex-col gap-2">
              <CounterNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <span className="text-foreground/60 font-body text-sm">{t(stat.labelFr, stat.labelEn)}</span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">{t("LE PROBLÈME", "THE PROBLEM")}</span>
          </AnimatedSection>
          <div className="mt-12 flex flex-col gap-6">
            {problems.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card border-l-2 border-destructive p-6 md:p-8">
                  <p className="font-display italic text-foreground/90 text-lg md:text-xl leading-relaxed">"{t(p.fr, p.en)}"</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <p className="font-display italic text-primary text-2xl md:text-3xl font-semibold">
              {t("Le problème n'est pas le bien. C'est le texte.", "The problem isn't the property. It's the copy.")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section id="projets" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">{t('ÉTUDES DE CAS', 'CASE STUDIES')}</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-tight">
              {t('Des mots. Des résultats. Des preuves.', 'Words. Results. Proof.')}
            </h2>
            <p className="text-foreground/60 font-body mt-4 text-lg">{t('Pas de témoignages. Des chiffres.', 'No testimonials. Numbers.')}</p>
          </AnimatedSection>
          <div className="mt-20 flex flex-col gap-24">
            {caseStudies.map((cs, idx) => (
              <AnimatedSection key={idx}>
                <div>
                  <span className="font-mono text-xs text-primary/60 uppercase tracking-widest">#{String(idx + 1).padStart(2, '0')}</span>
                  <p className="font-mono text-xs text-foreground/50 uppercase tracking-wider mt-2">{t(cs.eyebrowFr, cs.eyebrowEn)}</p>
                  <div className="mt-8 relative pl-8 border-l border-primary/30">
                    {cs.steps.map((step, si) => {
                      const config = stepConfig[step.type];
                      return (
                        <AnimatedSection key={si} delay={si * 0.1} className="mb-8 last:mb-0 relative">
                          <div className={`absolute -left-[calc(2rem+5px)] top-1 w-[10px] h-[10px] rounded-full ${config.color}`} />
                          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">{config.label[lang]}</span>
                          {step.type === 'insight' ? (
                            <p className="font-display italic text-primary text-lg mt-1">"{t(step.fr, step.en)}"</p>
                          ) : (
                            <p className="text-foreground/80 font-body mt-1">{t(step.fr, step.en)}</p>
                          )}
                        </AnimatedSection>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="a-propos" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="aspect-square bg-card rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-primary/20 rotate-45" />
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/10 rotate-12" />
                <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <blockquote className="font-display italic text-2xl md:text-3xl text-foreground leading-snug">
                {t("Je ne suis pas agent immobilier. Je suis celui qui fait sonner le téléphone des agents immobiliers.", "I'm not a real estate agent. I'm the one who makes real estate agents' phones ring.")}
              </blockquote>
              <p className="text-foreground/60 font-body mt-6 leading-relaxed">
                {t("KIKI Tchédrak — Copywriter immobilier. Spécialiste en réécriture d'annonces, prospection email et conversion digitale pour les conseillers indépendants.", "KIKI Tchédrak — Real estate copywriter. Specialist in listing rewrites, email prospecting, and digital conversion for independent advisors.")}
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mb-24">
            <h3 className="font-display text-2xl text-foreground mb-8">{t("Ce que je fais", "What I do")}</h3>
            <div className="flex flex-col gap-4">
              {aboutServices.map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="flex items-center gap-4 text-foreground/80 font-body text-lg">
                    <span className="text-primary">—</span>{t(s.fr, s.en)}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-24 text-center">
            <p className="font-display italic text-2xl md:text-3xl text-foreground mb-4">{t("Je ne fais pas du joli. Je fais du rentable.", "I don't do pretty. I do profitable.")}</p>
            <p className="font-display italic text-2xl md:text-3xl text-foreground/70">{t("Je ne travaille pas avec tout le monde.", "I don't work with everyone.")}</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sectorStats.map((s, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-card border-t-2 border-primary p-6">
                    <span className="font-mono text-primary text-2xl font-bold">{s.stat}</span>
                    <p className="text-foreground/60 font-body text-sm mt-2">{t(s.labelFr, s.labelEn)}</p>
                    <p className="text-foreground/50 font-display italic text-sm mt-3 border-t border-border/30 pt-3">"{t(s.quoteFr, s.quoteEn)}"</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">SERVICES</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-tight">
              {t("Ce que je fais concrètement pour toi.", "What I concretely do for you.")}
            </h2>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCards.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="bg-card p-8 h-full border-l-2 border-transparent hover:border-primary transition-colors group relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
                  <h3 className="font-display text-xl text-foreground mb-6 relative z-10">{t(s.titleFr, s.titleEn)}</h3>
                  <div className="space-y-4 relative z-10">
                    <div>
                      <span className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">{t("Ce que c'est", "What it is")}</span>
                      <p className="text-foreground/70 font-body text-sm mt-1">{t(s.whatFr, s.whatEn)}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">{t("Ce que ça change", "What it changes")}</span>
                      <p className="text-foreground/70 font-body text-sm mt-1">{t(s.changeFr, s.changeEn)}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">{t("Pour qui", "For whom")}</span>
                      <p className="text-foreground/70 font-body text-sm mt-1">{t(s.whoFr, s.whoEn)}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-24 text-center max-w-3xl mx-auto">
            <p className="font-display italic text-xl md:text-2xl text-foreground/90 leading-relaxed">
              {t("Mandataire IAD, Safti ou Optimhome. Entre 1 et 5 ans d'expérience. Tu publies. Tu prospectes. Mais ton téléphone ne sonne pas assez. C'est exactement là que j'interviens.", "IAD, Safti or Optimhome advisor. Between 1 and 5 years of experience. You post. You prospect. But your phone doesn't ring enough. That's exactly where I step in.")}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection className="mb-8">
            <h2 className="font-display italic text-3xl md:text-5xl text-foreground leading-tight">
              {t("Tu as une annonce qui stagne ? Envoie-la moi.", "Got a listing that's stagnating? Send it to me.")}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mb-12">
            <p className="text-foreground/60 font-body text-lg">
              {t("Je te dis en 24h ce qui bloque — et comment le débloquer.", "I'll tell you in 24h what's blocking it — and how to fix it.")}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mb-16">
            <a href="https://linkedin.com/in/kikitchedrak" target="_blank" rel="noopener noreferrer" data-hoverable className="inline-block w-full sm:w-auto bg-primary text-primary-foreground px-10 py-5 font-mono text-sm uppercase tracking-wider hover:bg-gold-light transition-colors">
              {t("Envoyer mon annonce sur LinkedIn", "Send my listing on LinkedIn")}
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="mb-24">
            <div className="flex flex-col gap-4 items-center">
              {channels.map((ch, i) => (
                <a key={i} href={ch.href} target="_blank" rel="noopener noreferrer" data-hoverable className="flex items-center gap-3 text-foreground/70 font-body hover:text-primary transition-colors">
                  {ch.icon}<span>{ch.label}</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
          <div className="bg-card py-8 -mx-6 px-6">
            <p className="font-mono text-xs text-primary uppercase tracking-widest text-center">
              L'Encre Immo by KIKI Tchédrak — {t("Les mots qui font signer.", "Words that make them sign.")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
