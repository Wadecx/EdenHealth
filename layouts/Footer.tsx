import { buttonVariants } from '@/components/common/Button';
import { cn } from '@/libs/utils';
import { FooterDataInternalWebLink, FooterDataSocialMediaLink } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const FOOTER_INTERNALE_WEB_LINKS: FooterDataInternalWebLink[] = [
  {
    title: 'EDEN HEALTH & VOUS',
    links: [
      {
        label: 'Le menu',
        href: '/menu',
      },
      {
        label: 'Le concept',
        href: '/le-concept',
      },
      {
        label: 'Réserver une table',
        href: '/reserver',
      },
    ],
  },
  {
    title: 'CONDITIONS & CONFIDENTIALITÉ',
    links: [
      {
        label: `©${new Date().getFullYear()} EDEN HEALTH`,
      },
      {
        label: 'Mentions légales',
        href: '/mentions-legales',
      },
      {
        label: 'Politique de confidentialité',
        href: '/politique-confidentialite',
      },
    ],
  },
];

export const FOOTER_SOCIAL_MEDIA_LINKS: FooterDataSocialMediaLink = {
  title: 'SUIVEZ NOS AVENTURES',
  links: [
    // {
    //   href: '',
    //   image: {
    //     src: '/assets/icons/linkedin.svg',
    //     alt: 'linkedin icone',
    //   },
    // },
    {
      href: 'https://www.instagram.com/restaurant_edenhealth?igsh=bzhiN3gwd2xtajk5',
      image: {
        src: '/assets/icons/instagram.svg',
        alt: 'instagram icone',
      },
    },
    {
      href: 'https://www.facebook.com/share/1WucwYWDFq/?mibextid=wwXIfr',
      image: {
        src: '/assets/icons/facebook.svg',
        alt: 'facebook icone',
      },
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[url('/assets/images/footer-bg.png')] z-10 relative bg-cover bg-top bg-no-repeat pt-32 pb-16">
      <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row gap-12 justify-between  max-w-8/10 mx-auto">
        <div className="space-y-4 max-w-[18rem]">
          <Image
            src={'/assets/images/logo.png'}
            alt="logo marketing box violet foncé"
            width={223}
            quality={100}
            height={60}
          />

          <div className="p-3 rounded-lg space-y-2 bg-white shadow-md">
            <a
              className={cn(buttonVariants({ variant: 'pink' }), 'w-full')}
              href="tel:0272623476"
            >
              <span className="flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.39062 1.67188C0.875 1.8125 0.5 2.23438 0.5 2.75C0.5 14.7969 10.25 24.5 22.25 24.5C22.8125 24.5 23.2344 24.1719 23.375 23.6562L24.5 18.7812C24.5938 18.2656 24.3594 17.7031 23.8438 17.4688L18.5938 15.2188C18.125 15.0312 17.6094 15.1719 17.2812 15.5469L14.9375 18.4062C11.2812 16.6719 8.32812 13.6719 6.64062 10.1094L9.5 7.76562C9.875 7.4375 10.0156 6.92188 9.82812 6.45312L7.57812 1.20312C7.34375 0.6875 6.78125 0.40625 6.26562 0.546875L1.39062 1.67188Z"
                    fill="white"
                  />
                </svg>

                <span className="text-lg">02 72 62 34 76</span>
              </span>
            </a>
            <p className="text-sm">
              Ouvert tous les jours de 12h00 à 22h00 (et jusqu’à 22h30 le
              vendredi et le samedi)
            </p>
          </div>
        </div>

        {FOOTER_INTERNALE_WEB_LINKS.map((item, i) => (
          <div key={i} className="space-y-4">
            <h4 className="font-black text-xl">{item.title}</h4>
            <div className="flex flex-col gap-2">
              {item.links.map((link, i) =>
                link.href ? (
                  <Link
                    key={i}
                    href={link.href}
                    className="hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span key={i} className=" font-medium">
                    {link.label}
                  </span>
                )
              )}
            </div>
          </div>
        ))}

        <div className="space-y-4">
          <h4 className="font-black text-xl ">
            {FOOTER_SOCIAL_MEDIA_LINKS.title}
          </h4>

          <div className="flex items-center gap-2">
            {FOOTER_SOCIAL_MEDIA_LINKS.links.map((link, i) => (
              <Link href={link.href} key={i} className="group">
                <Image
                  src={link.image.src}
                  alt={link.image.alt}
                  width={25}
                  height={25}
                  className="group-hover:-rotate-[10deg] transition-transform duration-300 ease-in-out"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <p className="max-w-8/10 mx-auto mt-8 font-black">
        Réalisé avec <span className="md:animate-heart inline-block">❤️</span>{' '}
        par <br />
        <a
          href="https://www.marketingbox.fr/"
          target="_blank"
          className="underline underline-offset-4"
        >
          L'agence Marketingbox
        </a>
      </p>
    </footer>
  );
};

export { Footer };
