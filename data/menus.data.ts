import { Menu } from '@/types';

export const MENUS: Menu[] = [
  {
    title: 'Burgers',
    image: {
      src: '/assets/images/burgers-cover.png',
      alt: 'Burgers',
    },
    href: 'nos-burgers',
    items: [
      {
        title: 'Eden burger',
        image: {
          src: '/assets/images/menus/eden-burger.png',
          alt: 'Eden burger',
        },

        description:
          'Buns sésame, boeuf tataki, pickles, oignon rouge, cheddar, salade frisée, sauce Eden',
        price: {
          unit: 13.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          'gluten',
          'oeuf',
          'sesame',
          'moutarde',
          'sulfites',
          'lactose',
          'celeri',
        ],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'The big chef burger',
        image: {
          src: '/assets/images/menus/the-big-chef-burger.png',
          alt: 'The big chef burger',
        },
        description:
          'Buns sésame, steak, bacon de volaille, salade frisée, cheddar, oeuf, oignons caramélisés, sauce BBQ',
        price: {
          unit: 14.9,
          spe: 17.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'oeuf', 'sesame'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Goat cheeseburger',
        image: {
          src: '/assets/images/menus/goat-cheeseburger.png',
          alt: 'Goat cheeseburger',
        },
        description:
          'Buns sésame, poulet, chèvre panné, roquette, oignons caramélisés, sauce moutarde miel',
        price: {
          unit: 13.9,
          spe: 16.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'lactose'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Salmon burger',
        image: {
          src: '/assets/images/menus/salmon-burger.png',
          alt: 'Salmon burger',
        },
        description:
          'Buns sésame, saumon mi-cuit, oignon rouge, cheddar, roquette, tomate, onion ring, sauce tartare et mayonnaise aneth',
        price: {
          unit: 16.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          'gluten',
          'oeuf',
          'moutarde',
          'sesame',
          'soja',
          'sulfites',
          'lactose',
          'celeri',
          'cereales',
        ],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Avocado burger',
        image: {
          src: '/assets/images/menus/avocado-burger.png',
          alt: 'Avocado burger',
        },
        description:
          'Black buns, steak ou chicken fries, avocat, oignons caramélisés, cheddar, bacon, salade frisée, sauce guacamole et BBQ',
        price: {
          unit: 15.9,
          spe: 18.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'oeuf', 'cereales'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Spicy burger',
        image: {
          src: '/assets/images/menus/spicy-burger.png',
          alt: 'Avocado burger',
        },
        description:
          'Buns sésame, poulet frit, cheddar, oignon rouge, bacon de volaille, sauce spicy',
        price: {
          unit: 15.9,
          spe: 18.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'oeuf', 'cereales'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Red kidney burger',
        image: {
          src: '/assets/images/menus/red-kidney-burger.png',
          alt: 'Red kidney burger',
        },
        description:
          'Buns vegan, steak red kidney, oignons caramélisés, lardon veggie, cheddar veggie, salade frisée, sauce guacamole et BBQ',
        price: {
          unit: 12.9,
          spe: 15.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ['gluten', 'moutarde', 'soja', 'celeri'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
    ],
  },
  {
    title: 'Healthy bowls',
    image: {
      src: '/assets/images/healthy-bowls-cover.png',
      alt: 'Healthy bowls',
    },
    href: 'nos-healthy-bowls',
    items: [
      {
        title: 'Eden healthy bowl',
        image: {
          src: '/assets/images/menus/eden-healthy-bowl.png',
          alt: '',
        },
        description:
          'Boeuf tataki, riz, salade feuille de chêne, avocat, coleslaw, oeuf, betterave, pomme, graine de sésame, sauce baoba',
        price: {
          unit: 13.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          'oeuf',
          'gluten',
          'moutarde',
          'soja',
          'sesame',
          'lactose',
          'celeri',
        ],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Hawaï healthy bowl',
        image: {
          src: '/assets/images/menus/hawai-healthy-bowl.png',
          alt: '',
        },
        description:
          'Poulet, riz, avocat, ananas, oignon rouge, oeuf, tomate cerise, salade frisée, coriande, sauce baoba',
        price: {
          unit: 12.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          'oeuf',
          'gluten',
          'moutarde',
          'soja',
          'sesame',
          'sulfites',
          'celeri',
          'lactose',
          'cereales',
          'celeri',
        ],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Salmon healthy bowl',
        image: {
          src: '/assets/images/menus/salmon-healthy-bowl.png',
          alt: '',
        },
        description:
          'Saumon tataki, riz, avocat, oignon frit, radis, coleslaw, oeuf, mangue, mâche, sauce saumon, graine de sésame',
        price: {
          unit: 14.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          'oeuf',
          'poisson',
          'mollusques',
          'gluten',
          'sesame',
          'moutarde',
          'soja',
          'lactose',
        ],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Red kidney healthy bowl',
        image: {
          src: '/assets/images/menus/red-kidney-healthy-bowl.png',
          alt: '',
        },
        description:
          'Red kidney, riz, feuille de chêne, avocat, betterave, coleslaw, oignon rouge, sauce guacamole',
        price: {
          unit: 11.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ['moutarde', 'gluten', 'soja', 'celeri', 'cereales'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Shrimp healthy bowl',
        image: {
          src: '/assets/images/menus/shrimp-healthy-bowl.png',
          alt: '',
        },
        description:
          'Crevette, riz, mâche, avocat, mangue, oignon frit, coriande, oeuf, coleslaw, edamame, sauce baoba',
        price: {
          unit: 14.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          'oeuf',
          'gluten',
          'moutarde',
          'mollusques',
          'poisson',
          'soja',
          'lactose',
          'celeri',
        ],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Veggie healthy bowl',
        image: {
          src: '/assets/images/menus/veggie-healthy-bowl.png',
          alt: '',
        },
        description:
          'Pop corn veggie, riz, salade frisée, avocat, falafels, ananas, wakamé, tomate cerise, sauce mango',
        price: {
          unit: 13.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ['gluten', 'moutarde', 'sulfites', 'lactose', 'cereales'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Spicy healthy bowl',
        image: {
          src: '/assets/images/menus/spicy-healthy-bowl.png',
          alt: '',
        },
        description:
          'Émincé de boeuf, riz, wakamé, nems, carottes, pousse de soja, sauce spicy, menthe, cacahuètes',
        price: {
          unit: 14.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ['gluten', 'moutarde', 'sulfites', 'lactose', 'cereales'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
    ],
  },
  {
    title: 'Special Healthy', // Section Special Healthy A voir pour les allergen ce n'est pas préciser
    image: {
      src: '/assets/images/cover-special-healthy.jpeg',
      alt: 'Healthy bowls',
    },
    href: 'nos-special-healthy',
    items: [
      {
        title: 'Carpaccio de boeuf',
        image: {
          src: '/assets/images/menus/carpaccio-boeuf.png',
          alt: 'Carpaccio de boeuf',
        },
        description:
          'Roquette, sauce pesto, parmesan, burrata',
        price: {
          unit: 16.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'lactose'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Tartare de boeuf',
        image: {
          src: '/assets/images/menus/tartare-boeuf.png',
          alt: 'Tartare de boeuf',
        },
        description:
          'Viande de boeuf, oeuf et préparation',
        price: {
          unit: 16.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'lactose'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Tartare de saumon',
        image: {
          src: '/assets/images/menus/tartare-saumon.png',
          alt: 'Tartare de saumon',
        },
        description:
          'Avocat, saumon frais et fumé, wakamé',
        price: {
          unit: 16.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'lactose'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Brochettes 3 viandes',
        image: {
          src: '/assets/images/menus/brochettes-viandes.png',
          alt: 'Brochettes 3 viandes',
        },
        description:
          'Poulet, boeuf, kefta',
        price: {
          unit: 18.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'lactose'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Bruschetta burrata',
        image: {
          src: '/assets/images/menus/bruschetta-burrata.png',
          alt: 'Bruschetta burrata',
        },
        description:
          'Cream cheese, aubergine grillée, poivron grillé, tomate cerise, burrata, balsamique, salade',
        price: {
          unit: 15.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'lactose'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Bruschetta pêcheur',
        image: {
          src: '/assets/images/menus/bruschetta-pecheur.png',
          alt: 'Bruschetta pêcheur',
        },
        description:
          'Base crème, cream cheese, saumon basilic, tomate cerise, aneth, pesto, canberry, salade',
        price: {
          unit: 15.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'lactose'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
    ],
  },
  {
    title: 'Finger food',
    image: {
      src: '/assets/images/finger-food-cover.png',
      alt: 'Finger food',
    },
    href: 'nos-finger-food',
    items: [
      {
        title: 'Mozzarellas sticks',
        image: {
          src: '/assets/images/menus/mozarella-sticks.png',
          alt: '',
        },
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['lactose'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Onion rings',
        image: {
          src: '/assets/images/menus/onions-rings.png',
          alt: '',
        },
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Fries chicken',
        image: {
          src: '/assets/images/menus/fries-chicken.png',
          alt: '',
        },
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['gluten', 'oeuf'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Red kidney pops',
        image: {
          src: '/assets/images/menus/red-kidney-pops.png',
          alt: '',
        },
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
    ],
  },
  {
    title: 'Desserts gourmands',
    image: {
      src: '/assets/images/desserts-gourmands-cover.png',
      alt: 'Desserts gourmands',
    },
    href: 'nos-desserts-gourmands',
    items: [
      {
        title: 'Salade de fruits de saison',
        image: {
          src: '/assets/images/menus/salade-de-fruits-de-saison.png',
          alt: '',
        },
        description: 'Fruits de saison',
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: [],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Pavlova',
        image: {
          src: '/assets/images/menus/pavlova.png',
          alt: '',
        },
        description: 'Meringue, glace au goût du Chef',
        price: {
          unit: 5.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ['soja'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Verrine yahourt',
        image: {
          src: '/assets/images/menus/verinne-yogourt.png',
          alt: '',
        },
        description: 'Goût vanille avec des fruits',
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ['soja'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Raspberry delight',
        image: {
          src: '/assets/images/menus/raspberry-delight.png',
          alt: '',
        },
        description: 'Framboise, crème, graine de chia',
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ['soja'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Tiramisu exotic',
        image: {
          src: '/assets/images/menus/tiramisu-exotic.png',
          alt: '',
        },
        description: '',
        price: {
          unit: 5.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ['soja'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
      {
        title: 'Café/Thé gourmand',
        image: {
          src: '/assets/images/menus/cafe-the-gourmand.png',
          alt: 'Café/Thé gourmand',
        },
        price: {
          unit: 6.8,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ['lactose', 'oeuf'],
        allergensFree: [
          {
            icon: 'gluten',
            text: 'Sans gluten',
          },
        ],
      },
    ],
  },
  {
    title: 'Cool drink',
    image: {
      src: '/assets/images/cool-drink-cover.png',
      alt: 'Cool drink',
    },
    href: 'nos-cool-drinks',
    items: [
      {
        title: 'JOMO',
        image: {
          src: '/assets/images/menus/jomo.png',
          alt: 'JOMO',
        },
        description:
          'Thés glacés : pêche hibiscus, passion citron vert, grenade litchi  /  Citronnades glacées : mangue, gingembre',
        price: {
          unit: 2.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'RAUCH',
        image: {
          src: '/assets/images/menus/raunch.png',
          alt: 'RAUCH',
        },
        description: 'Pomme, Fraise, Ananas Coco, ACE, Abricot',
        price: {
          unit: 3.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'SYMPLES',
        image: {
          src: '/assets/images/menus/symples.png',
          alt: 'SYMPLES',
        },
        description: 'Énergisante, Relaxante, Détoxifiante',
        price: {
          unit: 3.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'VITTEL',
        image: {
          src: '/assets/images/menus/vittel.png',
          alt: 'VITTEL',
        },
        description: 'Bouteille de 50 cl',
        price: {
          unit: 3.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'PERRIER',
        image: {
          src: '/assets/images/menus/perrier.png',
          alt: 'PERRIER',
        },
        description: 'Bouteille de 50 cl',
        price: {
          unit: 3.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
    ],
  },
  {
    title: 'Détox & Mocktails',
    image: {
      src: '/assets/images/detox-mocktails-cover.png',
      alt: 'Détox & Mocktails',
    },
    href: 'nos-detox-mocktails',
    items: [
      {
        title: 'Détox sanguine',
        image: {
          src: '/assets/images/menus/detox-sanguine.png',
          alt: 'Détox sanguine',
        },
        description:
          "Sirop hibiscus, citron vert, gingembre, eau gazeuse",
        price: {
          unit: 4.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'Green healthy',
        image: {
          src: '/assets/images/menus/green-healthy.png',
          alt: 'Green healthy',
        },
        description:
          'Jus citron jaune, citron vert, kiwi, pomme, sirop concombre, herbes aromatiques, miel',
        price: {
          unit: 4.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'Mojito',
        image: {
          src: '/assets/images/menus/mojito.png',
          alt: 'Mojito',
        },
        description: 'Sirop de rhum, schweppes, pomme, menthe, citron',
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'Pink paradise',
        image: {
          src: '/assets/images/menus/pink-paradise.png',
          alt: 'Pink paradise',
        },
        description:
          "Jus fraise, cramberry, citron vert, sirop hibiscus",
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'Spring détox',
        image: {
          src: '/assets/images/menus/spring-detox.png',
          alt: 'Spring détox',
        },
        description:
          "Sirop melon, jus citron et stawberry",
        price: {
          unit: 4.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'Virgin river',
        image: {
          src: '/assets/images/menus/virgin-river.png',
          alt: 'Virgin river',
        },
        description:
          "Sirop rose, jus litchi, pétillant, fleur hibiscus",
        price: {
          unit: 5.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'Darling spritz',
        image: {
          src: '/assets/images/menus/darling-spritz.png',
          alt: 'Darling spritz',
        },
        description:
          "Martini floral, pétillant fruité, eau gazeuse, hibiscus",
        price: {
          unit: 5.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'Douceur des vignes',
        image: {
          src: '/assets/images/menus/douceur-des-vignes.png',
          alt: 'Douceur des vignes',
        },
        description:
          "Pétillant raisin, sirop, jus de citron",
        price: {
          unit: 5.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      // Flower Fruity Mojito
      {
        title: 'Flower fruity mojito - Rose litchi',
        image: {
          src: '/assets/images/menus/flower-fruity-mojito-rose-litchi.png',
          alt: 'Flower fruity mojito - Rose litchi',
        },
        description:
          "Purée de fruits, citron vert, menthe, eau gazeuse, sirop floral rose litchi",
        price: {
          unit: 5.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'Flower fruity mojito - Violette myrtille',
        image: {
          src: '/assets/images/menus/flower-fruity-mojito-violette-myrtille.png',
          alt: 'Flower fruity mojito - Violette myrtille',
        },
        description:
          "Purée de fruits, citron vert, menthe, eau gazeuse, sirop floral violette myrtille",
        price: {
          unit: 5.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
      {
        title: 'Flower fruity mojito - Hibiscus red berries',
        image: {
          src: '/assets/images/menus/flower-fruity-mojito-hibiscus-red-berries.png',
          alt: 'Flower fruity mojito - Red berries',
        },
        description:
          "Purée de fruits, citron vert, menthe, eau gazeuse, sirop floral red berries",
        price: {
          unit: 5.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [],
        allergensFree: [],
      },
    ],
  },
];
