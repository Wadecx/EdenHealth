import { Menu } from "@/types";

export const MENUS: Menu[] = [
  {
    title: "Burgers",
    image: {
      src: "/assets/images/burgers-cover.png",
      alt: "Burgers",
    },
    href: "nos-burgers",
    items: [
      {
        title: "Eden burger",
        image: {
          src: "/assets/images/menus/eden-burger.png",
          alt: "Eden burger",
          size: {
            width: 270,
            height: 230,
          },
        },

        description:
          "Buns sésame, boeuf tataki, pickles, oignon rouge, cheddar, salade frisée, sauce Eden",
        price: {
          unit: 13.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          "gluten",
          "oeuf",
          "sesame",
          "moutarde",
          "sulfites",
          "lactose",
          "celeri",
        ],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "The big chef burger",
        image: {
          src: "/assets/images/menus/the-big-chef-burger.png",
          alt: "The big chef burger",
          size: {
            width: 270,
            height: 230,
          },
        },
        description:
          "Buns sésame, steak, bacon de volaille, salade frisée, cheddar, oeuf, oignons caramélisés, sauce BBQ",
        price: {
          unit: 14.9,
          spe: 17.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "oeuf", "sesame"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Goat cheeseburger",
        image: {
          src: "/assets/images/menus/goat-cheeseburger.png",
          alt: "Goat cheeseburger",
          size: {
            width: 270,
            height: 230,
          },
        },
        description:
          "Buns sésame, poulet, chèvre panné, roquette, oignons caramélisés, sauce moutarde miel",
        price: {
          unit: 13.9,
          spe: 16.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "lactose"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Salmon burger",
        image: {
          src: "/assets/images/menus/salmon-burger.png",
          alt: "Salmon burger",
          size: {
            width: 270,
            height: 230,
          },
        },
        description:
          "Buns sésame, saumon mi-cuit, oignon rouge, cheddar, roquette, tomate, onion ring, sauce tartare et mayonnaise aneth",
        price: {
          unit: 16.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          "gluten",
          "oeuf",
          "moutarde",
          "sesame",
          "soja",
          "sulfites",
          "lactose",
          "celeri",
          "cereales",
        ],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Avocado burger",
        image: {
          src: "/assets/images/menus/avocado-burger.png",
          alt: "Avocado burger",
          size: {
            width: 270,
            height: 230,
          },
        },
        description:
          "Black buns, steak ou chicken fries, avocat, oignons caramélisés, cheddar, bacon, salade frisée, sauce guacamole et BBQ",
        price: {
          unit: 15.9,
          spe: 18.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "oeuf", "cereales"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Spicy burger",
        image: {
          src: "/assets/images/menus/spicy-burger.png",
          alt: "Avocado burger",
          size: {
            width: 270,
            height: 230,
          },
        },
        description:
          "Buns sésame, poulet frit, cheddar, oignon rouge, bacon de volaille, sauce spicy",
        price: {
          unit: 15.9,
          spe: 18.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "oeuf", "cereales"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Red kidney burger",
        image: {
          src: "/assets/images/menus/red-kidney-burger.png",
          alt: "Red kidney burger",
          size: {
            width: 270,
            height: 230,
          },
        },
        description:
          "Buns vegan, steak red kidney, oignons caramélisés, lardon veggie, cheddar veggie, salade frisée, sauce guacamole et BBQ",
        price: {
          unit: 12.9,
          spe: 15.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ["gluten", "moutarde", "soja", "celeri"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
    ],
  },
  {
    title: "Healthy bowls",
    image: {
      src: "/assets/images/healthy-bowls-cover.png",
      alt: "Healthy bowls",
    },
    href: "nos-healthy-bowls",
    items: [
      {
        title: "Eden healthy bowl",
        image: {
          src: "/assets/images/menus/eden-healthy-bowl.png",
          alt: "",
          size: {
            width: 230,
            height: 250,
          },
        },
        description:
          "Boeuf tataki, riz, salade feuille de chêne, avocat, coleslaw, oeuf, betterave, pomme, graine de sésame, sauce baoba",
        price: {
          unit: 13.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          "oeuf",
          "gluten",
          "moutarde",
          "soja",
          "sesame",
          "lactose",
          "celeri",
        ],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Hawaï healthy bowl",
        image: {
          src: "/assets/images/menus/hawai-healthy-bowl.png",
          alt: "",
          size: {
            width: 230,
            height: 250,
          },
        },
        description:
          "Poulet, riz, avocat, ananas, oignon rouge, oeuf, tomate cerise, salade frisée, coriande, sauce baoba",
        price: {
          unit: 12.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          "oeuf",
          "gluten",
          "moutarde",
          "soja",
          "sesame",
          "sulfites",
          "celeri",
          "lactose",
          "cereales",
          "celeri",
        ],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Salmon healthy bowl",
        image: {
          src: "/assets/images/menus/salmon-healthy-bowl.png",
          alt: "",
          size: {
            width: 230,
            height: 250,
          },
        },
        description:
          "Saumon tataki, riz, avocat, oignon frit, radis, coleslaw, oeuf, mangue, mâche, sauce saumon, graine de sésame",
        price: {
          unit: 14.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          "oeuf",
          "poisson",
          "mollusques",
          "gluten",
          "sesame",
          "moutarde",
          "soja",
          "lactose",
        ],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Red kidney healthy bowl",
        image: {
          src: "/assets/images/menus/red-kidney-healthy-bowl.png",
          alt: "",
          size: {
            width: 230,
            height: 250,
          },
        },
        description:
          "Red kidney, riz, feuille de chêne, avocat, betterave, coleslaw, oignon rouge, sauce guacamole",
        price: {
          unit: 11.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ["moutarde", "gluten", "soja", "celeri", "cereales"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Shrimp healthy bowl",
        image: {
          src: "/assets/images/menus/shrimp-healthy-bowl.png",
          alt: "",
          size: {
            width: 230,
            height: 250,
          },
        },
        description:
          "Crevette, riz, mâche, avocat, mangue, oignon frit, coriande, oeuf, coleslaw, edamame, sauce baoba",
        price: {
          unit: 14.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: [
          "oeuf",
          "gluten",
          "moutarde",
          "mollusques",
          "poisson",
          "soja",
          "lactose",
          "celeri",
        ],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Veggie healthy bowl",
        image: {
          src: "/assets/images/menus/veggie-healthy-bowl.png",
          alt: "",
          size: {
            width: 230,
            height: 250,
          },
        },
        description:
          "Pop corn veggie, riz, salade frisée, avocat, falafels, ananas, wakamé, tomate cerise, sauce mango",
        price: {
          unit: 13.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ["gluten", "moutarde", "sulfites", "lactose", "cereales"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Spicy healthy bowl",
        image: {
          src: "/assets/images/menus/spicy-healthy-bowl.png",
          alt: "",
          size: {
            width: 230,
            height: 250,
          },
        },
        description:
          "Émincé de boeuf, riz, wakamé, nems, carottes, pousse de soja, sauce spicy, menthe, cacahuètes",
        price: {
          unit: 14.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ["gluten", "moutarde", "sulfites", "lactose", "cereales"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
    ],
  },
  {
    title: "Special Healthy", // Section Special Healthy A voir pour les allergen ce n'est pas préciser
    image: {
      src: "/assets/images/cover-special-healthy.jpeg",
      alt: "Healthy bowls",
    },
    href: "nos-special-healthy",
    items: [
      {
        title: "Carpaccio de boeuf",
        image: {
          src: "/assets/images/menus/carpaccio-boeuf.png",
          alt: "Carpaccio de boeuf",
          size: {
            width: 250,
            height: 200,
          },
        },
        description: "Roquette, sauce pesto, parmesan, burrata",
        price: {
          unit: 16.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "lactose"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Tartare de boeuf",
        image: {
          src: "/assets/images/menus/tartare-boeuf.png",
          alt: "Tartare de boeuf",
          size: {
            width: 270,
            height: 200,
          },
        },
        description: "Viande de boeuf, oeuf et préparation",
        price: {
          unit: 16.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "lactose"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Tartare de saumon",
        image: {
          src: "/assets/images/menus/tartare-saumon.png",
          alt: "Tartare de saumon",
          size: {
            width: 270,
            height: 200,
          },
        },
        description: "Avocat, saumon frais et fumé, wakamé",
        price: {
          unit: 16.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "lactose"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Brochettes 3 viandes",
        image: {
          src: "/assets/images/menus/brochettes-viandes.png",
          alt: "Brochettes 3 viandes",
          size: {
            width: 320,
            height: 200,
          },
        },
        description: "Poulet, boeuf, kefta",
        price: {
          unit: 18.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "lactose"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Bruschetta burrata",
        image: {
          src: "/assets/images/menus/bruschetta-burrata.png",
          alt: "Bruschetta burrata",
          size: {
            width: 250,
            height: 200,
          },
        },
        description:
          "Cream cheese, aubergine grillée, poivron grillé, tomate cerise, burrata, balsamique, salade",
        price: {
          unit: 15.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "lactose"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Bruschetta pêcheur",
        image: {
          src: "/assets/images/menus/bruschetta-pecheur.png",
          alt: "Bruschetta pêcheur",
          size: {
            width: 270,
            height: 200,
          },
        },
        description:
          "Base crème, cream cheese, saumon basilic, tomate cerise, aneth, pesto, canberry, salade",
        price: {
          unit: 15.9,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "lactose"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
    ],
  },
  {
    title: "Finger food",
    image: {
      src: "/assets/images/finger-food-cover.png",
      alt: "Finger food",
    },
    href: "nos-finger-food",
    items: [
      {
        title: "Mozzarellas sticks",
        image: {
          src: "/assets/images/menus/mozarella-sticks.png",
          alt: "",
          size: {
            width: 200,
            height: 200,
          },
        },
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["lactose"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Onion rings",
        image: {
          src: "/assets/images/menus/onions-rings.png",
          alt: "",
          size: {
            width: 200,
            height: 200,
          },
        },
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Fries chicken",
        image: {
          src: "/assets/images/menus/fries-chicken.png",
          alt: "",
          size: {
            width: 200,
            height: 200,
          },
        },
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["gluten", "oeuf"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Red kidney pops",
        image: {
          src: "/assets/images/menus/red-kidney-pops.png",
          alt: "",
          size: {
            width: 200,
            height: 200,
          },
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
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
    ],
  },
  {
    title: "Desserts gourmands",
    image: {
      src: "/assets/images/desserts-gourmands-cover.png",
      alt: "Desserts gourmands",
    },
    href: "nos-desserts-gourmands",
    items: [
      {
        title: "Salade de fruits de saison",
        image: {
          src: "/assets/images/menus/salade-de-fruits-de-saison.png",
          alt: "",
          size: {
            width: 170,
            height: 200,
          },
        },
        description: "Fruits de saison",
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
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Pavlova",
        image: {
          src: "/assets/images/menus/pavlova.png",
          alt: "",
          size: {
            width: 300,
            height: 250,
          },
        },
        description: "Meringue, glace au goût du Chef",
        price: {
          unit: 5.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ["soja"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Verrine yahourt",
        image: {
          src: "/assets/images/menus/verinne-yogourt.png",
          alt: "",
          size: {
            width: 200,
            height: 200,
          },
        },
        description: "Goût vanille avec des fruits",
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ["soja"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Raspberry delight",
        image: {
          src: "/assets/images/menus/raspberry-delight.png",
          alt: "",
          size: {
            width: 150,
            height: 200,
          },
        },
        description: "Framboise, crème, graine de chia",
        price: {
          unit: 5.5,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ["soja"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Tiramisu exotic",
        image: {
          src: "/assets/images/menus/tiramisu-exotic.png",
          alt: "",
          size: {
            width: 150,
            height: 200,
          },
        },
        description: "",
        price: {
          unit: 5.9,
        },
        preferences: {
          isVegan: true,
          isVegetarian: true,
        },
        allergens: ["soja"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
      {
        title: "Café/Thé gourmand",
        image: {
          src: "/assets/images/menus/cafe-the-gourmand.png",
          alt: "Café/Thé gourmand",
          size: {
            width: 250,
            height: 200,
          },
        },
        price: {
          unit: 6.8,
        },
        preferences: {
          isVegan: false,
          isVegetarian: false,
        },
        allergens: ["lactose", "oeuf"],
        allergensFree: [
          {
            icon: "gluten",
            text: "Sans gluten",
          },
        ],
      },
    ],
  },
  {
    title: "Cool drink",
    image: {
      src: "/assets/images/cool-drink-cover.png",
      alt: "Cool drink",
    },
    href: "nos-cool-drinks",
    items: [
      {
        title: "JOMO",
        image: {
          src: "/assets/images/menus/jomo.png",
          alt: "JOMO",
          size: {
            width: 200,
            height: 200,
          },
        },
        description:
          "Thés glacés : pêche hibiscus, passion citron vert, grenade litchi  /  Citronnades glacées : mangue, gingembre",
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
        title: "RAUCH",
        image: {
          src: "/assets/images/menus/raunch.png",
          alt: "RAUCH",
          size: {
            width: 200,
            height: 200,
          },
        },
        description: "Pomme, Fraise, Ananas Coco, ACE, Abricot",
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
        title: "SYMPLES",
        image: {
          src: "/assets/images/menus/symples.png",
          alt: "SYMPLES",
          size: {
            width: 200,
            height: 200,
          },
        },
        description: "Énergisante, Relaxante, Détoxifiante",
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
        title: "VITTEL",
        image: {
          src: "/assets/images/menus/vittel.png",
          alt: "VITTEL",
          size: {
            width: 65,
            height: 70,
          },
        },
        description: "Bouteille de 50 cl",
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
        title: "PERRIER",
        image: {
          src: "/assets/images/menus/perrier.png",
          alt: "PERRIER",
          size: {
            width: 200,
            height: 200,
          },
        },
        description: "Bouteille de 50 cl",
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
      // {
      //   title: "Evian",
      //   image: {
      //     src: "/assets/images/menus/evian.png",
      //     alt: "Evian",
      //     size: {
      //       width: 200,
      //       height: 200,
      //     },
      //   },
      //   description: "Bouteille de 50 cl",
      //   price: {
      //     unit: 3.5,
      //   },
      //   preferences: {
      //     isVegan: false,
      //     isVegetarian: false,
      //   },
      //   allergens: [],
      //   allergensFree: [],
      // },
      // {
      //   title: "San Pellegrino",
      //   image: {
      //     src: "/assets/images/menus/san-pellegrino.png",
      //     alt: "San Pellegrino",
      //     size: {
      //       width: 75,
      //       height: 120,
      //     },
      //   },
      //   description: "Bouteille de 50 cl",
      //   price: {
      //     unit: 3.5,
      //   },
      //   preferences: {
      //     isVegan: false,
      //     isVegetarian: false,
      //   },
      //   allergens: [],
      //   allergensFree: [],
      // },
    ],
  },
  {
    title: "Détox & Mocktails",
    image: {
      src: "/assets/images/detox-mocktails-cover.png",
      alt: "Détox & Mocktails",
    },
    href: "nos-detox-mocktails",
    items: [
      {
        title: "Détox sanguine",
        image: {
          src: "/assets/images/menus/detox-sanguine.png",
          alt: "Détox sanguine",
          size: {
            width: 180,
            height: 200,
          },
        },
        description: "Sirop hibiscus, citron vert, gingembre, eau gazeuse",
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
        title: "Green healthy",
        image: {
          src: "/assets/images/menus/green-healthy.png",
          alt: "Green healthy",
          size: {
            width: 120,
            height: 200,
          },
        },
        description:
          "Jus citron jaune, citron vert, kiwi, pomme, sirop concombre, herbes aromatiques, miel",
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
        title: "Mojito",
        image: {
          src: "/assets/images/menus/mojito.png",
          alt: "Mojito",
          size: {
            width: 160,
            height: 200,
          },
        },
        description: "Sirop de rhum, schweppes, pomme, menthe, citron",
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
        title: "Pink paradise",
        image: {
          src: "/assets/images/menus/pink-paradise.png",
          alt: "Pink paradise",
          size: {
            width: 130,
            height: 200,
          },
        },
        description: "Jus fraise, cramberry, citron vert, sirop hibiscus",
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
        title: "Spring détox",
        image: {
          src: "/assets/images/menus/spring-detox.png",
          alt: "Spring détox",
          size: {
            width: 150,
            height: 200,
          },
        },
        description: "Sirop melon, jus citron et stawberry",
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
        title: "Virgin river",
        image: {
          src: "/assets/images/menus/virgin-river.png",
          alt: "Virgin river",
          size: {
            width: 160,
            height: 200,
          },
        },
        description: "Sirop rose, jus litchi, pétillant, fleur hibiscus",
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
        title: "Darling spritz",
        image: {
          src: "/assets/images/menus/darling-spritz.png",
          alt: "Darling spritz",
          size: {
            width: 150,
            height: 200,
          },
        },
        description: "Martini floral, pétillant fruité, eau gazeuse, hibiscus",
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
        title: "Douceur des vignes",
        image: {
          src: "/assets/images/menus/douceur-des-vignes.png",
          alt: "Douceur des vignes",
          size: {
            width: 150,
            height: 200,
          },
        },
        description: "Pétillant raisin, sirop, jus de citron",
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
        title: "Flower fruity mojito - Rose litchi",
        image: {
          src: "/assets/images/menus/flower-fruity-mojito-rose-litchi.png",
          alt: "Flower fruity mojito - Rose litchi",
          size: {
            width: 170,
            height: 200,
          },
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
        title: "Flower fruity mojito - Violette myrtille",
        image: {
          src: "/assets/images/menus/flower-fruity-mojito-violette-myrtille.png",
          alt: "Flower fruity mojito - Violette myrtille",
          size: {
            width: 170,
            height: 200,
          },
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
        title: "Flower fruity mojito - Hibiscus red berries",
        image: {
          src: "/assets/images/menus/flower-fruity-mojito-hibiscus-red-berries.png",
          alt: "Flower fruity mojito - Red berries",
          size: {
            width: 200,
            height: 200,
          },
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
  // {
  //   title: "Bière Bio",
  //   image: {
  //     src: "/assets/images/biere-bio-cover.jpg",
  //     alt: "Bière Bio",
  //   },
  //   href: "nos-biere-bio",
  //   items: [
  //     {
  //       title: "Bière bio 85 Blonde",
  //       image: {
  //         src: "/assets/images/menus/biere-bio-85-blonde.png",
  //         alt: "Bière bio 85 Blonde",
  //         size: {
  //           width: 130,
  //           height: 120,
  //         },
  //       },
  //       description:
  //         "",
  //       price: {
  //         unit: 5.9,
  //       },
  //       preferences: {
  //         isVegan: false,
  //         isVegetarian: false,
  //       },
  //       allergens: [],
  //       allergensFree: [],
  //     },
  //     {
  //       title: "Bière bio 85 Blanche",
  //       image: {
  //         src: "/assets/images/menus/biere-bio-85-blanche.png",
  //         alt: "Bière bio 85 Blanche",
  //         size: {
  //           width: 130,
  //           height: 120,
  //         },
  //       },
  //       description:
  //         "",
  //       price: {
  //         unit: 5.9,
  //       },
  //       preferences: {
  //         isVegan: false,
  //         isVegetarian: false,
  //       },
  //       allergens: [],
  //       allergensFree: [],
  //     },
  //     {
  //       title: "Bière bio 85 IPA",
  //       image: {
  //         src: "/assets/images/menus/biere-bio-85-ipa.png",
  //         alt: "Bière bio 85 ipa",
  //         size: {
  //           width: 130,
  //           height: 120,
  //         },
  //       },
  //       description:
  //         "",
  //       price: {
  //         unit: 5.9,
  //       },
  //       preferences: {
  //         isVegan: false,
  //         isVegetarian: false,
  //       },
  //       allergens: [],
  //       allergensFree: [],
  //     },
  //     {
  //       title: "Bière bio 85 Ambrée",
  //       image: {
  //         src: "/assets/images/menus/biere-bio-85-ambrée.png",
  //         alt: "Bière bio 85 ambrée",
  //         size: {
  //           width: 130,
  //           height: 120,
  //         },
  //       },
  //       description:
  //         "",
  //       price: {
  //         unit: 5.9,
  //       },
  //       preferences: {
  //         isVegan: false,
  //         isVegetarian: false,
  //       },
  //       allergens: [],
  //       allergensFree: [],
  //     },
  //     {
  //       title: "Bière bio Lindmans-Cerise",
  //       image: {
  //         src: "/assets/images/menus/biere-bio-lindmans-cerise.png",
  //         alt: "Bière bio Lindmans Cerise",
  //         size: {
  //           width: 120,
  //           height: 120,
  //         },
  //       },
  //       description:
  //         "",
  //       price: {
  //         unit: 5.9,
  //       },
  //       preferences: {
  //         isVegan: false,
  //         isVegetarian: false,
  //       },
  //       allergens: [],
  //       allergensFree: [],
  //     },
  //     {
  //       title: "Bière bio Lindmans-Framboise",
  //       image: {
  //         src: "/assets/images/menus/biere-bio-lindmans-framboise.png",
  //         alt: "Bière bio Lindmans Framboise",
  //         size: {
  //           width: 120,
  //           height: 120,
  //         },
  //       },
  //       description:
  //         "",
  //       price: {
  //         unit: 5.9,
  //       },
  //       preferences: {
  //         isVegan: false,
  //         isVegetarian: false,
  //       },
  //       allergens: [],
  //       allergensFree: [],
  //     },
  //   ],
  // },
];
