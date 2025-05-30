import { AnimateContainer } from '@/animations';
import { Button, Section } from '@/components';

export const HeroSection = () => {
  return (
    <Section
      size="full"
      className="bg-[url('/assets/images/hero-burger-mobile.png')] lg:bg-[url('/assets/images/hero-burger.png')]  bg-cover bg-center bg-no-repeat my-0 lg:my-0 h-[75vh] xl:h-screen"
    >
      <AnimateContainer animate="popIn" className="h-full">
        <div className="flex justify-between h-full max-w-9/10 lg:max-w-8/10 mx-auto items-center">
          <div className="space-y-8 max-w-xl">
            <h1 className="font-black text-3xl md:text-5xl">
              DÉCOUVREZ UNE EXPÉRIENCE GUSTATIVE UNIQUE !
            </h1>
            <p className="text-sm md:text-md md:text-justify">
              Chez EDEN HEALTH, on vous propose une carte saine et gourmande.
              Régalez-vous sans compromis !<br />
              <br />
              Réservez dès maintenant dans notre restaurant.
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Button href="/reserver" className="w-fit ">
                RÉSERVER UNE TABLE
              </Button>

              <a
                className="flex items-center transition w-fit ease-in-out uppercase text-sm duration-300 active:scale-[97%] justify-center font-black bg-green text-white hover:shadow-md h-10 rounded-md px-6 py-4"
                target="_blank"
                href="https://webshop.fulleapps.io/s/eden-health-borne/mjaznda1x2q3mmi/142748 ? "
              >
                CLICK & COLLECT
              </a>
            </div>
          </div>
        </div>
      </AnimateContainer>
    </Section>
  );
};
