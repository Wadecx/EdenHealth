export interface Menu {
  title: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  items: MenuItem[];
}

export interface MenuItem {
  title: string;
  description?: string;
  image: {
    src: string;
    alt: string;
    size: {
      width: number;
      height: number;
    };
  };
  price: {
    unit: number;
    spe?: number;
  };
  preferences: {
    isVegetarian: boolean;
    isVegan: boolean;
  };
  allergens: Allergen[];
  allergensFree: {
    icon: Allergen;
    text: string;
  }[];
}

export type Allergen =
  | "lactose"
  | "gluten"
  | "crustace"
  | "oeuf"
  | "poisson"
  | "soja"
  | "celeri"
  | "sesame"
  | "fruit a coques"
  | "arachide"
  | "moutarde"
  | "sulfites"
  | "mollusques"
  | "cereales";
