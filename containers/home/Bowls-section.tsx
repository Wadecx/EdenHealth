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

const BOLWS = [
  {
    name: 'EDEN HEALTHY BOWL',
    image: {
      src: '/assets/images/menus/eden-healthy-bowl.png',
      alt: "Photo d'un bowl",
    },
    priceByUnit: '13,90€',
    specificities: [],
  },
  {
    name: 'HAWAÏ HEALTHY BOWL',
    image: {
      src: '/assets/images/menus/hawai-healthy-bowl.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '12,90€',
    specificities: [],
  },
  {
    name: 'SALMON HEALTHY BOWL',
    image: {
      src: '/assets/images/menus/salmon-healthy-bowl.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '14,90€',
    specificities: [],
  },
  {
    name: 'RED KIDNEY HEALTHY BOWL',
    image: {
      src: '/assets/images/menus/red-kidney-healthy-bowl.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '11,90€',
    specificities: [],
  },
  {
    name: 'SHRIMP HEALTHY BOWL',
    image: {
      src: '/assets/images/menus/shrimp-healthy-bowl.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '14,90€',
    specificities: [],
  },
  {
    name: 'VEGGIE HEALTHY BOWL',
    image: {
      src: '/assets/images/menus/veggie-healthy-bowl.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '13,90€',
    specificities: [],
  },
  {
    name: 'SPICY HEALTHY BOWL',
    image: {
      src: '/assets/images/menus/spicy-healthy-bowl.png',
      alt: "Photo d'un burger",
    },
    priceByUnit: '14,90€',
    specificities: [],
  },
];

export const BowlsSection = () => {
  return (
    <Section>
      <h2 className="font-black text-3xl md:text-5xl uppercase mb-8">
        Nos Healthy Bowls.
      </h2>

      <Carousel
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {BOLWS.map((bowl, index) => (
            <CarouselItem
              className="px-6 py-12 md:px-4 md:basis-1/2 lg:basis-1/4"
              key={index}
            >
              <AnimateContainer animate="popIn" key={index} delay={index * 0.1}>
                <BowlItem bowl={bowl} />
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

const BowlItem = ({ bowl }: { bowl: (typeof BOLWS)[0] }) => {
  return (
    <div className="flex flex-col gap-4  bg-white rounded-2xl border shadow-xl justify-around h-[330px]">
      <div className="-mt-12">
        <Image
          src={bowl.image.src}
          alt={bowl.image.alt}
          width={275}
          height={200}
          quality={100}
          className="mx-auto object-contain"
        />
      </div>

      <div className="-mt-8">
        <p className="uppercase font-black text-lg px-4">{bowl.name}</p>
        <div className="flex justify-between items-end px-4 pb-4">
          <div className="flex flex-col gap-1">
            <small className="uppercase">1 pièce</small>
            <p className="font-black">{bowl.priceByUnit}</p>
          </div>

          {bowl.specificities.map((spe, i) => (
            <Image src={''} alt="allergen free" />
          ))}
        </div>
      </div>
    </div>
  );
};
