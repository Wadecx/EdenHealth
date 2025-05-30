import { HeroMenu, MenuContainer } from '@/containers';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EDEN HEALTH – Menu',
  description:
    'Explorez notre menu healthy et gourmand : burgers, bowls et autres délices élaborés à partir de produits frais et naturels pour un plaisir sans compromis.',
};

export default function MenuPage() {
  return (
    <>
      <HeroMenu />
      <MenuContainer />
    </>
  );
}
