import {
  GreenBanner,
  HeroConceptSection,
  NaturalSection,
  PleasureSection,
  TestimonialsSection,
} from '@/containers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EDEN HEALTH – Le concept',
  description:
    'Plongez dans l’univers d’EDEN HEALTH, inspiré d’un jardin d’antan, où tradition, nature et innovation s’unissent pour vous offrir une cuisine saine et savoureuse.',
};

export default function ConceptPage() {
  return (
    <>
      <HeroConceptSection />
      <div className=" bg-fill -mt-12 z-40 relative bg-[url('/assets/images/waves-bg.svg')] bg-top bg-no-repeat w-full min-h-16"></div>
      <NaturalSection variant="red">
        <p className="md:text-justify">
          On dit qu’il existait jadis, un jardin où l’eau de source coulait à
          flot et que dans ce lieu on pouvait manger avec satiété.  Dans ce
          jardin, tout était bon, savoureux, sain à n’en pas douter…
        </p>

        <p className="md:text-justify">
          Dans notre jardin, vous mangerez des produits frais et sains,
          parfaitement dosés, parfaitement ‘healthy’. Notre objectif, prendre
          soin de vous.
        </p>

        <p className="md:text-justify">
          Hélas, bien que la pomme nous ait été défendu, nous conseillons les
          nôtres sans culpabilité. Nos plats, nos sauces, nos desserts sont
          préparés sur place à partir de produits français.
        </p>

        <p className="md:text-justify">
          Eden health, une entreprise engageante, une entreprise
          éco-responsable.
        </p>
      </NaturalSection>
      <GreenBanner />
      <PleasureSection />
      <TestimonialsSection />
    </>
  );
}
