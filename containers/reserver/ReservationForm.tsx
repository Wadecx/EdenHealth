'use client';

import { AnimateContainer } from '@/animations';
import { Section, TallyForm } from '@/components';

export const ReservationForm = () => {
  return (
    <Section
      size="full"
      className="my-0 md:my-0 -mt-8 md:-mt-8 bg-[url('/assets/images/waves-bg.svg')] bg-cover bg-top bg-no-repeat"
    >
      <AnimateContainer animate="popIn">
        <div className="flex flex-col gap-2 max-w-9/10 pt-[150px] pb-[50px] lg:max-w-8/10 mx-auto">
          <h2 className="uppercase font-black text-3xl">
            Réserver votre table
          </h2>
          <TallyForm />
        </div>
      </AnimateContainer>
    </Section>
  );
};
