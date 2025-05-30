import { AnimateContainer } from '@/animations';
import { Button, Section } from '@/components';

export const HeroConceptSection = () => {
  return (
    <Section
      size="full"
      className="bg-[url('/assets/images/hero-burger-mobile.png')] lg:bg-[url('/assets/images/hero-burger.png')]  bg-cover bg-center bg-no-repeat my-0 lg:my-0 h-[75vh] xl:h-screen"
    >
      <AnimateContainer animate="popIn" className="h-full">
        <div className="flex justify-between max-w-9/10 lg:max-w-8/10 mx-auto items-center h-full">
          <div className="space-y-8 max-w-xl">
            <h1 className="font-black text-3xl md:text-5xl ">
              MANGER SAIN N’A
              <br />
              JAMAIS ÉTÉ
              <br />
              AUSSI SAVOUREUX.
            </h1>
            <p className="text-sm md:text-md md:text-justify">
              Savourez une cuisine équilibrée qui allie fraîcheur et bien-être,
              pour une expérience culinaire à la fois délicieuse et bonne pour
              la santé.
              <br />
              <br />
              Offrez à votre corps le meilleur avec nos plats sains !
            </p>
            <Button href="/reserver" className="w-fit ">
              RÉSERVER UNE TABLE
            </Button>
          </div>
        </div>
      </AnimateContainer>
    </Section>
  );
};
