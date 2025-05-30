'use client';

import { AnimateContainer } from '@/animations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Section,
} from '@/components';
import Image from 'next/image';

const BURGERS = [
  {
    name: 'EDEN BURGER',
    image: {
      src: '/assets/images/menus/eden-burger.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '13,90€',
    specificities: [],
  },
  {
    name: 'THE BIG CHEF BURGER',
    image: {
      src: '/assets/images/menus/the-big-chef-burger.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '14,90€',
    specificities: [],
  },
  {
    name: 'GOAT CHEESEBURGER',
    image: {
      src: '/assets/images/menus/goat-cheeseburger.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '13,90€',
    specificities: [],
  },
  {
    name: 'SALMON BURGER',
    image: {
      src: '/assets/images/menus/salmon-burger.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '16,90€',
    specificities: [],
  },
  {
    name: 'AVOCADO BURGER',
    image: {
      src: '/assets/images/menus/avocado-burger.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '15,90€',
    specificities: [],
  },
  {
    name: 'SPICY BURGER',
    image: {
      src: '/assets/images/menus/spicy-burger.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '15,90€',
    specificities: [],
  },
  {
    name: 'RED KIDNEY BURGER',
    image: {
      src: '/assets/images/menus/red-kidney-burger.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '12,90€',
    specificities: [],
  },
];

export const BurgersSection = () => {
  return (
    <Section>
      <h2 className="font-black text-3xl md:text-5xl uppercase mb-8">
        Nos burgers.
      </h2>

      <Carousel
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {BURGERS.map((burger, index) => (
            <CarouselItem
              className="px-6 py-12 md:px-4 md:basis-1/2 lg:basis-1/4"
              key={index}
            >
              <AnimateContainer animate="popIn" key={index} delay={index * 0.1}>
                <BurgerItem burger={burger} />
              </AnimateContainer>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

const BurgerItem = ({ burger }: { burger: (typeof BURGERS)[0] }) => {
  return (
    <div className="flex flex-col gap-4  bg-white rounded-2xl border shadow-xl justify-around h-[280px]">
      <div className="-mt-12">
        <Image
          src={burger.image.src}
          alt={burger.image.alt}
          width={275}
          height={200}
          quality={100}
          className="mx-auto object-contain"
        />
      </div>

      <div className="-mt-8">
        <p className="uppercase font-black text-lg px-4">{burger.name}</p>
        <div className="flex justify-between items-end px-4 pb-4">
          <div className="flex flex-col gap-1">
            <small className="uppercase">1 pièce</small>
            <p className="font-black">{burger.priceByUnit}</p>
          </div>

          {burger.specificities.map((spe, i) => (
            <Image src={''} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};
