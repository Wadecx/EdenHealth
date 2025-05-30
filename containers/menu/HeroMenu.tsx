'use client';

import { Section } from '@/components';

const filters = [
  {
    title: 'Burgers',
    href: '#nos-burgers',
  },
  {
    title: 'Healthy<br/> bowls',
    href: '#nos-healthy-bowls',
  },
  {
    title: 'Special Healthy',
    href: '#nos-special-healthy',
  },
  {
    title: 'Finger<br/> food',
    href: '#nos-finger-food',
  },
  {
    title: 'Desserts<br/> gourmands',
    href: '#nos-desserts-gourmands',
  },
  {
    title: 'Boissons',
    href: '#nos-cool-drinks',
  },
  {
    title: 'Détox & Mocktails',
    href: '#nos-detox-mocktails',
  },
];

export const HeroMenu = () => {
  const handleScroll = (id: string) => {
    const section = document.querySelector(id);

    const offset = 100;
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };
  return (
    <Section size="full" className="bg-pink pb-12 pt-20 mt-[4.8rem]">
      <div className="flex snap-x px-4 overflow-x-scroll overflow-y-hidden whitespace-nowrap items-center justify-between gap-8 md:max-w-9/10 mx-auto">
        {filters.map((filter, i) => (
          <button
            onClick={() => handleScroll(filter.href)}
            key={i}
            className="uppercase hover:underline underline-offset-4 text-xl text-white text-center font-black"
            dangerouslySetInnerHTML={{ __html: filter.title }}
          />
        ))}
      </div>
    </Section>
  );
};
