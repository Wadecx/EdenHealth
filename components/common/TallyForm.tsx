'use client';
import { useEffect } from 'react';

export const TallyForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      Tally.loadEmbeds();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      data-tally-src="https://tally.so/embed/3E8PEA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="100%"
      height="867"
      title="Réservation"
    ></iframe>
  );
};
