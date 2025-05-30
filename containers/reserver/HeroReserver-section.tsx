import { AnimateContainer } from '@/animations';
import { Button, Section } from '@/components';

export const HeroReserverSection = () => {
  return (
    <Section
      size="full"
      className="bg-[url('/assets/images/hero-burger-mobile.png')] lg:bg-[url('/assets/images/hero-reservation.png')] bg-cover bg-top bg-no-repeat my-0 md:my-0 h-[70vh]"
    >
      <AnimateContainer animate="popIn" className="h-full">
        <div className="flex justify-center text-center h-full max-w-9/10 lg:max-w-8/10 mx-auto items-center">
          <div className="space-y-8">
            <h1 className="font-black text-5xl">JE RÉSERVE UNE TABLE !</h1>
            <p className="max-w-4xl mx-auto md:text-justify">
              Savourez une cuisine équilibrée qui allie fraîcheur et bien-être,
              pour une expérience culinaire à la fois délicieuse et bonne pour
              la santé.
              <br />
              <br />
              Offrez à votre corps le meilleur avec nos plats sains !
            </p>
            <Button href="/menu" className="w-fit m-auto">
              VOIR LE MENU
            </Button>
          </div>
        </div>
      </AnimateContainer>
    </Section>
  );
};
