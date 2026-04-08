import { useLang } from '@/context/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';

interface CaseStudy {
  eyebrowFr: string;
  eyebrowEn: string;
  steps: {
    type: 'before' | 'intervention' | 'after' | 'insight';
    fr: string;
    en: string;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    eyebrowFr: 'APPARTEMENT · PARIS 15E · RÉSIDENTIEL',
    eyebrowEn: 'APARTMENT · PARIS 15TH · RESIDENTIAL',
    steps: [
      { type: 'before', fr: '4 contacts/semaine · 22 jours sans offre', en: '4 contacts/week · 22 days without offer' },
      { type: 'intervention', fr: 'Projection mentale + 3 filtres acheteur en 5 secondes', en: 'Mental projection + 3 buyer filters in 5 seconds' },
      { type: 'after', fr: '14 contacts/semaine · Première offre en 6 jours', en: '14 contacts/week · First offer in 6 days' },
      { type: 'insight', fr: "Une annonce ne doit pas décrire un bien. Elle doit déclencher une visite.", en: "A listing shouldn't describe a property. It should trigger a visit." },
    ],
  },
  {
    eyebrowFr: 'MAISON · TOURS NORD · RÉSIDENTIEL DYNAMIQUE',
    eyebrowEn: 'HOUSE · TOURS NORTH · DYNAMIC RESIDENTIAL',
    steps: [
      { type: 'before', fr: '1 appel/semaine · 3 semaines de stagnation', en: '1 call/week · 3 weeks stagnating' },
      { type: 'intervention', fr: 'Ouverture sensorielle + preuve sociale + urgence authentique', en: 'Sensory opening + social proof + authentic urgency' },
      { type: 'after', fr: "+400% d'appels · +333% de vues · 5 appels/semaine", en: '+400% calls · +333% views · 5 calls/week' },
      { type: 'insight', fr: "L'émotion ouvre. La raison convainc. Les deux ensemble font signer.", en: 'Emotion opens. Reason convinces. Both together make them sign.' },
    ],
  },
  {
    eyebrowFr: 'VILLA · CANNES · LUXE · 1 250 000€',
    eyebrowEn: 'VILLA · CANNES · LUXURY · €1,250,000',
    steps: [
      { type: 'before', fr: '0 visite sérieuse · 45 jours · 1 250 000€', en: '0 serious visit · 45 days · €1,250,000' },
      { type: 'intervention', fr: 'Ton souverain · Exclusivité · Visites sur dossier', en: 'Sovereign tone · Exclusivity · Visits by appointment' },
      { type: 'after', fr: '×4 contacts qualifiés/mois · Première visite sérieuse en 11 jours', en: '×4 qualified contacts/month · First serious visit in 11 days' },
      { type: 'insight', fr: "Le luxe ne se vend pas. Il se révèle. Le texte est le rideau.", en: "Luxury isn't sold. It's revealed. The copy is the curtain." },
    ],
  },
];

const stepConfig = {
  before: { label: { fr: 'AVANT', en: 'BEFORE' }, color: 'bg-destructive' },
  intervention: { label: { fr: 'INTERVENTION', en: 'INTERVENTION' }, color: 'bg-primary' },
  after: { label: { fr: 'APRÈS', en: 'AFTER' }, color: 'bg-green-600' },
  insight: { label: { fr: 'INSIGHT', en: 'INSIGHT' }, color: 'bg-primary' },
};

const Projects = () => {
  const { t, lang } = useLang();

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <span className="font-mono text-xs text-primary uppercase tracking-widest">
            {t('ÉTUDES DE CAS', 'CASE STUDIES')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-tight">
            {t('Des mots. Des résultats. Des preuves.', 'Words. Results. Proof.')}
          </h2>
          <p className="text-foreground/60 font-body mt-4 text-lg">
            {t('Pas de témoignages. Des chiffres.', 'No testimonials. Numbers.')}
          </p>
        </AnimatedSection>

        <div className="mt-20 flex flex-col gap-24">
          {caseStudies.map((cs, idx) => (
            <AnimatedSection key={idx}>
              <div>
                <span className="font-mono text-xs text-primary/60 uppercase tracking-widest">
                  #{String(idx + 1).padStart(2, '0')}
                </span>
                <p className="font-mono text-xs text-foreground/50 uppercase tracking-wider mt-2">
                  {t(cs.eyebrowFr, cs.eyebrowEn)}
                </p>

                <div className="mt-8 relative pl-8 border-l border-primary/30">
                  {cs.steps.map((step, si) => {
                    const config = stepConfig[step.type];
                    return (
                      <AnimatedSection key={si} delay={si * 0.1} className="mb-8 last:mb-0 relative">
                        <div className={`absolute -left-[calc(2rem+5px)] top-1 w-[10px] h-[10px] rounded-full ${config.color}`} />
                        <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                          {config.label[lang]}
                        </span>
                        {step.type === 'insight' ? (
                          <p className="font-display italic text-primary text-lg mt-1">
                            "{t(step.fr, step.en)}"
                          </p>
                        ) : (
                          <p className="text-foreground/80 font-body mt-1">
                            {t(step.fr, step.en)}
                          </p>
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
    </div>
  );
};

export default Projects;
