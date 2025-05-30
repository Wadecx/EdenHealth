import { AnimateContainer } from '@/animations';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Section,
} from '@/components';
import { cn } from '@/libs/utils';
import Image from 'next/image';

const TESTIMONIAL = [
  {
    name: 'Ju Vlln',
    image: {
      src: '/assets/images/review-avatar.png',
      alt: "Photo d'un burger",
    },
    content:
      "Nous avons passé un excellent moment chez Eden Health à Cholet ! Avec mon mari, nous avons dégusté des burgers délicieux, préparés avec des produits de qualité (mayonnaise maison excellente). Le cadre est magnifique, apaisant et très soigné. Mention spéciale à l'équipe, qui est chaleureuse et accueillante. Une superbe nouvelle adresse que je recommande vivement !",
    date: 'Décembre 2024',
  },
  {
    name: 'Eric Trumel',
    image: {
      src: '/assets/images/review-avatar.png',
      alt: "Photo d'un burger",
    },
    content:
      'Cadre magnifique, menus diversifiés et très délicieux...staff très cordial et sympa, ambiance chaleureuse....je recommande. Merci à l équipe du Éden Health',
    date: 'Décembre 2024',
  },
  {
    name: 'Mesa Goulahs',
    image: {
      src: '/assets/images/review-avatar.png',
      alt: "Photo d'un burger",
    },
    content:
      'On a découvert ce nouvel établissement. Quelle belle surprise, un super accueil et une cuisine excellente. Je recommande vivement',
    date: 'Décembre 2024',
  },
  {
    name: 'Andeya Daya',
    image: {
      src: '/assets/images/review-avatar.png',
      alt: "Photo d'un burger",
    },
    content:
      'Une très belle expérience : des plats savoureux et une décoration exceptionnel. Je recommande !',
    date: 'Décembre 2024',
  },
];

export const TestimonialsSection = ({
  variant = 'green',
}: {
  variant?: 'green' | 'pink';
}) => {
  return (
    <Section>
      <h2 className="font-black text-3xl uppercase mb-12 text-center">
        ILS ONT{' '}
        <span className={cn('text-green', { 'text-pink': variant === 'pink' })}>
          ESSAYÉ
        </span>
        , ILS PARTAGENT !
      </h2>

      <AnimateContainer animate="popIn">
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            {TESTIMONIAL.map((review, index) => (
              <CarouselItem
                className="p-6 md:p-12 md:basis-1/2 lg:basis-1/3"
                key={index}
              >
                <Testimonial review={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </AnimateContainer>
      <div className="mx-auto w-fit mt-12">
        <a href="https://g.co/kgs/Y3ydwbi" target="_blank">
          <Image
            src={'/assets/images/google-review.png'}
            alt="Logo google reviews"
            width={186}
            height={88}
          />
        </a>
      </div>
    </Section>
  );
};

const Testimonial = ({ review }: { review: (typeof TESTIMONIAL)[0] }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg min-h-[450px] p-8 flex flex-col gap-4 select-none">
      <div className="flex items-center gap-2">
        <Image
          src={review.image.src}
          alt={review.image.alt}
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          className="size-16 rounded-full"
        />

        <div className="flex flex-col gap-1">
          <p className="font-black">{review.name}</p>
          <Image
            src={'/assets/icons/stars.png'}
            alt="stars icone"
            width={96}
            height={96}
            quality={100}
          />
        </div>
      </div>

      <div className="space-y-3">
        <p>{review.content}</p>

        <small className="text-pink uppercase block">{review.date}</small>
      </div>
    </div>
  );
};
