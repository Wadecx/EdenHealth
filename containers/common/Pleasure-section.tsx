import { AnimateContainer } from '@/animations';
import { Button, Section } from '@/components';
import Image from 'next/image';

export const PleasureSection = () => {
  return (
    <Section size="8/10">
      <div className="flex flex-col-reverse md:flex-row-reverse gap-2 items-center">
        <AnimateContainer animate="popIn" className="md:w-1/2">
          <div className="w-full">
            <Image
              src={'/assets/images/pleasure-img.jpg'}
              width={0}
              height={0}
              sizes="100vw"
              quality={100}
              className="w-full max-h-[600px] object-contain"
              alt="Photo d'un panier de fruits et légumes"
            />
          </div>
        </AnimateContainer>

        <AnimateContainer
          animate="popIn"
          duration={0.2}
          delay={0.2}
          className="md:flex-1"
        >
          <div className="space-y-8">
            <h2 className="uppercase font-black text-2xl">
              EDEN HEALTH, UN PLAISIR GOURMAND
              <br /> ET <span className={'text-pink'}>SANS COMPROMIS</span>.
            </h2>

            <p className="md:text-justify">
              EDEN HEALTH prouve qu’on peut se faire plaisir tout en prenant
              soin de sa santé. Avec des produits savoureux et naturels, sans
              additifs, chaque bouchée est un régal. Que ce soit pour un encas
              ou un dessert, ce restaurant offre des options pour tous les goûts
              et régimes.
            </p>

            <p className="md:text-justify">
              Les recettes sont pensées pour offrir un équilibre parfait entre
              saveur et bien-être, permettant à chacun de se faire plaisir sans
              culpabilité.
            </p>

            <Button href="/menu">Voir le menu</Button>
          </div>
        </AnimateContainer>
      </div>
    </Section>
  );
};
