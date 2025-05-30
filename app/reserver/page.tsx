import {
  GreenBanner,
  HeroReserverSection,
  ReservationForm,
  TestimonialsSection,
} from '@/containers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EDEN HEALTH – Réserver',
  description:
    'Réservez votre table chez EDEN HEALTH et vivez un moment inoubliable dans un cadre chaleureux dédié à la qualité, au bien-être et à la nature.',
};

export default function ReserverPage() {
  return (
    <>
      <HeroReserverSection />
      <ReservationForm />
      <GreenBanner />
      <TestimonialsSection />
    </>
  );
}
