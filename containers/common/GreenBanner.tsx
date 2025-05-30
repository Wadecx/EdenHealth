import { AnimateContainer } from '@/animations';
import { Section } from '@/components';
import { cn } from '@/libs/utils';
import Image from 'next/image';

const ITEMS = [
  {
    icon: {
      src: '/assets/icons/heart.svg',
      alt: 'Coeur icone',
    },
    title: 'FAIBLES EN<br/> CALORIES',
  },
  {
    icon: {
      src: '/assets/icons/vegan.svg',
      alt: 'Vegan icone',
    },
    title: 'VEGAN<br/> FRIENDLY',
  },
  {
    icon: {
      src: '/assets/icons/apple.svg',
      alt: 'Pomme icone',
    },
    title: 'PRODUITS 100%<br/> NATUREL',
  },
];

export const GreenBanner = ({ className }: { className?: string }) => {
  return (
    <Section
      size="full"
      className={cn('bg-green py-24 md:my-[50px] md:mt-0', className)}
    >
      <div className="max-w-8/10 mx-auto flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-evenly">
        {ITEMS.map((item, index) => (
          <AnimateContainer animate="popIn" delay={index * 0.1} key={index}>
            <div className="flex flex-col items-center gap-3 text-white">
              <Image
                src={item.icon.src}
                alt={item.icon.alt}
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                className="w-full max-h-12 object-contain"
              />
              <p
                className="uppercase font-black text-xl md:text-2xl text-center"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
          </AnimateContainer>
        ))}
      </div>
    </Section>
  );
};
