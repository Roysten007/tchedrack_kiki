import { useLang } from '@/context/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useLang();

  const services = [
    {
      titleFr: "Audit + Réécriture d'annonce",
      titleEn: "Listing Audit + Rewrite",
      whatFr: "J'analyse ton annonce existante et la réécris intégralement.",
      whatEn: "I analyze your existing listing and rewrite it entirely.",
      changeFr: "Plus de contacts qualifiés. Un téléphone qui sonne.",
      changeEn: "More qualified contacts. A phone that rings.",
      whoFr: "Conseiller avec une annonce qui stagne.",
      whoEn: "Advisor with a stagnating listing.",
    },
    {
      titleFr: "Séquence email prospection vendeurs",
      titleEn: "Seller Prospecting Email Sequence",
      whatFr: "3 à 5 emails pour transformer un vendeur froid en rendez-vous.",
      whatEn: "3–5 emails to turn a cold seller into an appointment.",
      changeFr: "Un pipeline actif, sans relances maladroites.",
      changeEn: "An active pipeline, without awkward follow-ups.",
      whoFr: "Mandataire qui prospecte mais ne convertit pas.",
      whoEn: "Advisor who prospects but doesn't convert.",
    },
    {
      titleFr: "Page de capture",
      titleEn: "Capture Page",
      whatFr: "Une page qui capte des leads vendeurs ou acheteurs qualifiés.",
      whatEn: "A page that captures qualified seller or buyer leads.",
      changeFr: "Moins de trafic perdu, plus de contacts concrets.",
      changeEn: "Less lost traffic, more concrete contacts.",
      whoFr: "Conseiller avec une présence digitale à monétiser.",
      whoEn: "Advisor with a digital presence to monetize.",
    },
    {
      titleFr: "Script LinkedIn",
      titleEn: "LinkedIn Script",
      whatFr: "Un message d'approche calibré pour LinkedIn.",
      whatEn: "A calibrated outreach message for LinkedIn.",
      changeFr: "Des réponses. Pas des silences.",
      changeEn: "Responses. Not silence.",
      whoFr: "Conseiller qui prospecte sur LinkedIn sans résultats.",
      whoEn: "Advisor prospecting on LinkedIn without results.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <span className="font-mono text-xs text-primary uppercase tracking-widest">SERVICES</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            {t("Ce que je fais concrètement pour toi.", "What I concretely do for you.")}
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card p-8 h-full border-l-2 border-transparent hover:border-primary transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
                <h3 className="font-display text-xl text-foreground mb-6 relative z-10">
                  {t(s.titleFr, s.titleEn)}
                </h3>
                <div className="space-y-4 relative z-10">
                  <div>
                    <span className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">
                      {t("Ce que c'est", "What it is")}
                    </span>
                    <p className="text-foreground/70 font-body text-sm mt-1">{t(s.whatFr, s.whatEn)}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">
                      {t("Ce que ça change", "What it changes")}
                    </span>
                    <p className="text-foreground/70 font-body text-sm mt-1">{t(s.changeFr, s.changeEn)}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">
                      {t("Pour qui", "For whom")}
                    </span>
                    <p className="text-foreground/70 font-body text-sm mt-1">{t(s.whoFr, s.whoEn)}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Who exactly */}
        <AnimatedSection className="mt-24 text-center max-w-3xl mx-auto">
          <p className="font-display italic text-xl md:text-2xl text-foreground/90 leading-relaxed">
            {t(
              "Mandataire IAD, Safti ou Optimhome. Entre 1 et 5 ans d'expérience. Tu publies. Tu prospectes. Mais ton téléphone ne sonne pas assez. C'est exactement là que j'interviens.",
              "IAD, Safti or Optimhome advisor. Between 1 and 5 years of experience. You post. You prospect. But your phone doesn't ring enough. That's exactly where I step in."
            )}
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;
