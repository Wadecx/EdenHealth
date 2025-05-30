import './globals.css';
import type { Metadata } from 'next';
import { Footer, Header } from '@/layouts';
import { ViewTransitions } from 'next-view-transitions';
import { GoogleTagManager, CookiesBanner } from '@/components';
import { fontVaribles } from '@/libs/fonts';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="fr" className="scroll-smooth">
        <body className={`${fontVaribles} font-montserrat`}>
          <CookiesBanner />
          <GoogleTagManager gtmId="" />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
