import { Button } from '@/components';
import {
  BowlsSection,
  BurgersSection,
  GreenBanner,
  HeroSection,
  NaturalSection,
  PleasureSection,
  TestimonialsSection,
} from '@/containers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EDEN HEALTH – Le Bonheur au Naturel, Cuisine Healthy & Gourmande',
  description:
    'Découvrez EDEN HEALTH, votre restaurant healthy et éco-responsable. Savourez des plats frais, naturels et gourmands dans un cadre inspiré du jardin d’antan où l’eau de source coulait à flot.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className=" bg-fill -mt-12 z-40 relative bg-[url('/assets/images/waves-bg.svg')] bg-top bg-no-repeat w-full min-h-16"></div>
      <NaturalSection>
        <p className="md:text-justify">
          On dit qu’il existait jadis, un jardin où l’eau de source coulait à
          flot et que dans ce lieu on pouvait manger avec satiété.  Dans ce
          jardin, tout était bon, savoureux, sain à n’en pas douter…
        </p>

        <p className="md:text-justify">
          Notre objectif, prendre soin de vous. Dans notre jardin, vous mangerez
          des produits frais et sains, parfaitement ‘healthy’ !
          <br /> EDEN HEALTH, une entreprise engageante, une entreprise
          éco-responsable.
        </p>

        <Button href="/le-concept" variant="pink" className="w-fit">
          En savoir plus
        </Button>
      </NaturalSection>
      <BurgersSection />
      <GreenBanner />
      <BowlsSection />
      <PleasureSection />
      <TestimonialsSection />
    </>
  );
}
