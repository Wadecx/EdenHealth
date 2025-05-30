import { AnimateContainer } from '@/animations';
import { Section } from '@/components';
import { cn } from '@/libs/utils';
import Image from 'next/image';

export const NaturalSection = ({
  variant = 'green',
  children,
}: {
  variant?: 'green' | 'red';
  children: React.ReactNode;
}) => {
  return (
    <Section size="full" className="my-0 md:my-0 md:mt-24">
      <div className="flex flex-col-reverse md:flex-row gap-2 max-w-9/10 pb-[50px] md:pb-[150px] lg:max-w-8/10 mx-auto items-center">
        <AnimateContainer animate="popIn" className="md:w-1/2">
          <div className="w-full">
            <Image
              src={'/assets/images/natural-img.jpg'}
              width={0}
              height={0}
              sizes="100vw"
              quality={100}
              className="w-full max-h-[600px] object-contain"
              alt="Photo d'un sandwich avec des produits frais et sains"
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
              EDEN HEALTH, Le Bonheur
              <br /> au{' '}
              <span
                className={cn('text-green', { 'text-pink': variant === 'red' })}
              >
                Naturel
              </span>
              .
            </h2>
            {children}
          </div>
        </AnimateContainer>
      </div>
    </Section>
  );
};
