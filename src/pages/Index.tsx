import { useLang } from '@/context/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import CounterNumber from '@/components/CounterNumber';
import { motion } from 'framer-motion';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const { t, lang } = useLang();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi, onSelect]);

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



  const sectorEvidence = [
    {
      value: 12,
      prefix: "",
      suffix: "% vs 4,7%",
      labelFr: "Taux de conversion · annonces optimisées vs moyenne secteur",
      labelEn: "Conversion rate · optimized listings vs. industry average",
      source: "Google Ads Immobilier · Benchmark sectoriel",
      interpretationFr: "Une annonce bien écrite ne double pas les résultats. Elle les triple. Les 7,3 points d'écart, c'est exactement là que j'opère.",
      interpretationEn: "A well-written listing doesn't double results. It triples them. Those 7.3 points of difference — that's exactly where I operate."
    },
    {
      value: 15,
      prefix: "",
      suffix: " sec",
      labelFr: "Pour convaincre ou perdre définitivement un lecteur",
      labelEn: "To convince — or permanently lose — a reader",
      source: "National Association of Realtors · Étude comportementale",
      secondaryFr: "60% des agents risquent de perdre des ventes en 2026 faute de communication adaptée.",
      secondaryEn: "60% of agents risk losing sales in 2026 due to inadequate communication.",
      interpretationFr: "Ton accroche est ton seul rendez-vous avec l'acheteur. Rate-la, et c'est terminé — peu importe la qualité du bien.",
      interpretationEn: "Your hook is your only appointment with the buyer. Miss it, and it's over — regardless of the property's quality."
    },
    {
      value: 3,
      prefix: "Top ",
      suffix: "",
      labelFr: "ROI email · immobilier parmi les meilleurs secteurs",
      labelEn: "Email ROI · real estate among top-performing sectors",
      source: "Mailchimp Benchmarks · Secteur Immobilier 2024",
      pointsFr: ["Taux d'ouverture moyen : 19,17%", "Taux de clic : 1,77%", "Taux de conversion : 1,4% à 2,6%"],
      pointsEn: ["Average open rate: 19.17%", "Click-through rate: 1.77%", "Conversion rate: 1.4% to 2.6%"],
      interpretationFr: "Je ne rédige pas juste des emails. Je dépasse ces benchmarks pour transformer votre base de données en mandats signés.",
      interpretationEn: "I don't just write emails. I beat these benchmarks to turn your database into signed mandates."
    },
    {
      value: 3.5,
      prefix: "×",
      suffix: "",
      labelFr: "SEO immobilier convertit plus vite que la publicité payante",
      labelEn: "Real estate SEO converts faster than paid ads",
      source: "BrightEdge · Search vs Paid · Immobilier",
      secondaryFr: "57% des visiteurs de sites immobiliers viennent d'une recherche active.",
      secondaryEn: "57% of real estate website visitors come from active search.",
      interpretationFr: "Payer pour exister ou écrire pour durer. Le texte est le seul moteur de cette visibilité — et il travaille sans budget publicitaire.",
      interpretationEn: "Pay to exist or write to last. Copy is the only engine of this visibility — and it works without an ad budget."
    }
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

  const faqData = [
    {
      qFr: "Tu es agent immobilier ?",
      qEn: "Are you a real estate agent?",
      aFr: "Non. Je suis copywriter spécialisé immobilier. Je ne vends pas de biens — j'écris les textes qui font vendre les tiens.",
      aEn: "No. I'm a real estate copywriter. I don't sell properties — I write the words that sell yours."
    },
    {
      qFr: "Comment tu peux améliorer mon annonce sans connaître le bien ?",
      qEn: "How can you improve my listing without knowing the property?",
      aFr: "Tu me transmets ton annonce actuelle + quelques infos clés sur le bien. Je fais le reste. Mon travail c'est de transformer ce que tu m'envoies — pas d'inventer ce qui n'existe pas.",
      aEn: "You send me your current listing + a few key details about the property. I handle the rest. My job is to transform what you give me — not invent what isn't there."
    },
    {
      qFr: "En combien de temps je reçois ma réécriture ?",
      qEn: "How long before I receive my rewrite?",
      aFr: "48h à 72h selon la complexité du bien. Luxe inclus.",
      aEn: "48 to 72 hours depending on the property's complexity. Luxury included."
    },
    {
      qFr: "Est-ce que ça marche vraiment pour le luxe ?",
      qEn: "Does it really work for luxury properties?",
      aFr: "Le luxe ne se vend pas avec les mêmes mots que le résidentiel classique. J'ai un segment dédié, un ton souverain, une approche différente. Les résultats Cannes parlent d'eux-mêmes.",
      aEn: "Luxury isn't sold with the same words as standard residential. I have a dedicated segment, a sovereign tone, a different approach. The Cannes results speak for themselves."
    },
    {
      qFr: "Et si les résultats ne sont pas au rendez-vous ?",
      qEn: "What if the results aren't there?",
      aFr: "Je ne garantis pas les visites — le marché reste le marché. Ce que je garantis : une annonce qui donne à ton bien toutes ses chances. Si le texte bloque, on le retravaille ensemble.",
      aEn: "I don't guarantee visits — the market is the market. What I guarantee: a listing that gives your property every chance it deserves. If the copy isn't working, we rework it together."
    },
    {
      qFr: "Tu travailles avec tous les réseaux de mandataires ?",
      qEn: "Do you work with all agent networks?",
      aFr: "IAD, Safti, Optimhome, indépendants — peu importe le réseau. Ce qui compte : tu publies déjà, tu prospectes, et tu veux que ton téléphone sonne davantage.",
      aEn: "IAD, Safti, Optimhome, independents — the network doesn't matter. What counts: you're already publishing, already prospecting, and you want your phone to ring more."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section id="accueil" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            src="/hero-bg.png" 
            alt="Luxury Writing" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
          <div className="absolute inset-0 noise-bg opacity-30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">

          <AnimatedSection delay={0.1}>
            <h1 className="font-display italic font-semibold text-foreground leading-[1.2] px-4" style={{ fontSize: 'clamp(2rem, 8vw, 6rem)' }}>
              {lang === 'fr' ? (
                <>Les mots qui font <span className="text-primary">signer.</span></>
              ) : (
                <>Words that make them <span className="text-primary">sign.</span></>
              )}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-foreground/70 font-body text-lg md:text-xl max-w-2xl leading-relaxed">
              {t("J'aide les conseillers immobiliers à transformer leurs annonces en machines à visites — sans changer le bien, sans baisser le prix.", "I help real estate advisors turn their listings into visit-generating machines — without changing the property, without dropping the price.")}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <a href="https://linkedin.com/in/kikitchedrak" target="_blank" rel="noopener noreferrer" data-hoverable className="premium-btn">
              {t("Envoie-moi ton annonce à auditer", "Send me your listing to audit")}
            </a>
          </AnimatedSection>

        </div>
      </section>



      {/* ===== THE PROBLEM ===== */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <div className="mt-12 flex flex-col gap-6">
            {problems.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card border-l-2 border-destructive p-6 md:p-8 rounded-2xl">
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
      <section id="projets" className="pt-32 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-tight">
              {t('Des mots. Des résultats. Des preuves.', 'Words. Results. Proof.')}
            </h2>
            <p className="text-foreground/70 font-body mt-6 text-xl">{t('Pas de témoignages. Des chiffres.', 'No testimonials. Numbers.')}</p>
          </AnimatedSection>
          <div className="mt-24 flex flex-col gap-32">
            {caseStudies.map((cs, idx) => (
              <AnimatedSection key={idx}>
                <div>

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
                            <p className="text-foreground/80 font-body mt-2 text-lg">{t(step.fr, step.en)}</p>
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
      <section id="a-propos" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-16 mb-32 max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="w-72 h-96 bg-[#111111] rounded-3xl overflow-hidden relative mx-auto premium-card group">
                <img 
                  src="/portrait.jpg" 
                  alt="KIKI Tchédrak" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-110 saturate-[1.1] contrast-[1.15] sharpness-high" 
                  style={{ imageRendering: 'auto', filter: 'contrast(115%) brightness(110%) blur(0px)' }}
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <blockquote className="font-display italic text-3xl md:text-4xl text-foreground leading-snug">
                {t("Je ne suis pas agent immobilier. Je suis celui qui fait sonner le téléphone des agents immobiliers.", "I'm not a real estate agent. I'm the one who makes real estate agents' phones ring.")}
              </blockquote>
              <p className="text-foreground/70 font-body mt-8 text-xl leading-relaxed">
                {t("KIKI Tchédrak — Copywriter immobilier. Spécialiste en réécriture d'annonces, prospection email et conversion digitale pour les conseillers indépendants.", "KIKI Tchédrak — Real estate copywriter. Specialist in listing rewrites, email prospecting, and digital conversion for independent advisors.")}
              </p>
            </AnimatedSection>
          </div>



          <AnimatedSection className="mb-24 text-center">
            <p className="font-display italic text-2xl md:text-3xl text-foreground mb-4">{t("Je ne fais pas du joli. Je fais du rentable.", "I don't do pretty. I do profitable.")}</p>
            <p className="font-display italic text-2xl md:text-3xl text-foreground/70">{t("Je ne travaille pas avec tout le monde.", "I don't work with everyone.")}</p>
          </AnimatedSection>

          {/* New Evidence Section */}
          <div className="mb-32">
            <AnimatedSection className="text-center mb-16">
              <span className="font-mono text-primary text-xs uppercase tracking-[0.2em]">{t("PREUVES SECTORIELLES", "SECTOR EVIDENCE")}</span>
              <h2 className="font-montserrat text-4xl md:text-5xl text-foreground mt-4 mb-4">
                {t("Ce que les chiffres disent. Ce que ça change pour toi.", "What the numbers say. What it changes for you.")}
              </h2>
              <p className="font-sans-body text-foreground/60">{t("Pas d'opinions. Des données.", "No opinions. Data.")}</p>
            </AnimatedSection>

            <div className="relative group">
              <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex items-stretch">
                  {sectorEvidence.map((s, i) => (
                    <div key={i} className="flex-[0_0_100%] md:flex-[0_0_48%] lg:flex-[0_0_32%] min-w-0 mx-3">
                      <AnimatedSection delay={i * 0.1} className="h-full">
                        <div className="bg-[#111111] border-t-2 border-primary p-8 md:p-10 rounded-2xl h-full min-h-[420px] flex flex-col hover:translate-y-[-4px] transition-transform duration-300 shadow-xl">
                          <div className="mb-6">
                            <CounterNumber 
                              value={s.value} 
                              prefix={s.prefix} 
                              suffix={s.suffix} 
                              className="leading-none text-primary"
                              style={{ fontSize: 'clamp(38px, 9vw, 54px)' }}
                            />
                          </div>
                          
                          <p className="font-sans-body text-foreground font-medium text-xl md:text-2xl leading-tight mb-4">
                            {t(s.labelFr, s.labelEn)}
                          </p>
                          <span className="font-mono text-[10px] text-primary/50 uppercase tracking-wider mb-6">
                            {s.source}
                          </span>
                          <div className="mt-auto pt-8 border-t border-white/5">
                            <p className="font-serif-display italic text-foreground/70 text-2xl leading-relaxed">
                              "{t(s.interpretationFr, s.interpretationEn)}"
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-3 mt-12">
                {sectorEvidence.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 nav-reset ${
                      selectedIndex === i ? 'bg-primary w-10' : 'bg-primary/20 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>

            <AnimatedSection delay={0.6} className="mt-16 text-center">
              <p className="font-serif-display italic text-xl md:text-2xl text-primary max-w-3xl mx-auto leading-relaxed">
                {t("Le copywriting immobilier n'est pas une dépense. C'est un levier de performance mesurable.", "Real estate copywriting isn't an expense. It's a measurable performance lever.")}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-tight">
              {t("Ce que je fais concrètement pour toi.", "What I concretely do for you.")}
            </h2>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceCards.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="bg-card p-8 h-full border-l-2 border-transparent hover:border-primary transition-colors group relative overflow-hidden rounded-2xl">
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

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-24 px-6 bg-[#0E0E0E]">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="font-mono text-primary text-xs uppercase tracking-[0.2em]">{t("STABILISER VOS DOUTES", "SETTLE YOUR DOUBTS")}</span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-4">
              {t("Questions Fréquentes", "Frequently Asked Questions")}
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
            {faqData.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className="h-full">
                <div 
                  className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden premium-card group cursor-pointer h-full flex flex-col"
                  onClick={(e) => {
                    const content = e.currentTarget.querySelector('.faq-content');
                    const icon = e.currentTarget.querySelector('.faq-icon');
                    if (content) content.classList.toggle('hidden');
                    if (icon) icon.classList.toggle('rotate-45');
                  }}
                >
                  <div className="p-6 flex justify-between items-center bg-[#0D0D0D] group-hover:bg-[#151515] transition-colors flex-1">
                    <h3 className="font-display font-bold text-white text-base md:text-lg pr-4">
                      {t(item.qFr, item.qEn)}
                    </h3>
                    <div className="faq-icon text-primary transition-transform duration-300 shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="faq-content hidden p-6 pt-0 bg-[#0D0D0D] font-sans-body text-foreground/70 text-sm leading-relaxed border-t border-white/5">
                    {t(item.aFr, item.aEn)}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection className="mb-12">
            <h2 className="font-display italic text-2xl md:text-5xl text-foreground leading-tight px-4">
              {t("Tu as une annonce qui stagne ? Envoie-la moi.", "Got a listing that's stagnating? Send it to me.")}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mb-12">
            <p className="text-foreground/60 font-body text-lg">
              {t("Je te dis en 24h ce qui bloque — et comment le débloquer.", "I'll tell you in 24h what's blocking it — and how to fix it.")}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mb-16">
            <a href="https://linkedin.com/in/kikitchedrak" target="_blank" rel="noopener noreferrer" data-hoverable className="premium-btn w-full sm:w-auto">
              {t("Envoyer mon annonce sur LinkedIn", "Send my listing on LinkedIn")}
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.3} className="mb-24">
            <div className="flex flex-row gap-6 md:gap-12 justify-center items-center mt-12 px-4 flex-wrap">
              {channels.map((ch, i) => (
                <a key={i} href={ch.href} title={ch.label} target="_blank" rel="noopener noreferrer" data-hoverable className="transition-all hover:scale-125">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#111111] border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 premium-card">
                    {ch.icon}
                  </div>
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
