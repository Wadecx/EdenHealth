"use client";

import { AnimateContainer } from "@/animations";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Section,
} from "@/components";
import { RadioButton } from "@/components/common/Radio";
import { MENUS } from "@/data/menus.data";
import { cn } from "@/libs/utils";
import { Allergen, MenuItem as IMenuItem, Menu } from "@/types";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/common/Accordion";
import { X } from "lucide-react";

export const MenuContainer: React.FC = () => {
  const [selectedPreference, setSelectedPreference] = useState<string>("");
  const [selectedAllergy, setSelectedAllergy] = useState<string>("");

  const handleFilter = (): Menu[] => {
    return MENUS.map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        const preferenceMatch =
          selectedPreference === ""
            ? true
            : selectedPreference === "Vegan"
            ? item.preferences.isVegan
            : selectedPreference === "Végétarien"
            ? item.preferences.isVegetarian
            : true;

        const allergyMatch =
          selectedAllergy === ""
            ? true
            : !item.allergens.includes(
                selectedAllergy.toLowerCase() as Allergen
              );

        return preferenceMatch && allergyMatch;
      }),
    }));
  };

  const filteredMenu = handleFilter();

  return (
    <Section>
      <div
        className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-24"
        id="menu"
      >
        <Filters
          selectedPreference={selectedPreference}
          setSelectedPreference={setSelectedPreference}
          selectedAllergy={selectedAllergy}
          setSelectedAllergy={setSelectedAllergy}
        />
        <MenuDisplay filteredMenu={filteredMenu} />
      </div>
    </Section>
  );
};

interface FiltersProps {
  selectedPreference: string;
  setSelectedPreference: React.Dispatch<React.SetStateAction<string>>;
  selectedAllergy: string;
  setSelectedAllergy: React.Dispatch<React.SetStateAction<string>>;
}

const Filters: React.FC<FiltersProps> = ({
  selectedPreference,
  setSelectedPreference,
  selectedAllergy,
  setSelectedAllergy,
}) => {
  const preferences = ["", "Végétarien", "Vegan"];
  const allergies = [
    "",
    "gluten",
    "lactose",
    "fruit à coques",
    "poisson",
    "oeuf",
    "arachide",
    "soja",
    "sesame",
    "céléri",
    "moutarde",
    "cereales",
    "mollusques",
    "sulfites",
  ];

  const renderRadioGroup = (
    items: string[],
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>,
    name: string
  ) => {
    return items.map((item) => (
      <div key={item} className="flex items-center mb-2">
        <RadioButton
          id={`${name}-${item}`}
          name={name}
          value={item}
          checked={selected === item}
          onChange={(value) => setSelected(value)}
        />
        <label
          className="ml-2 cursor-pointer"
          onClick={() => {
            setSelected(item);
            handleScrollIntoTopOnFilterClick();
          }}
        >
          {!item
            ? name === "preference"
              ? "Toutes"
              : "Aucune"
            : item.charAt(0).toUpperCase() + item.slice(1)}
        </label>
      </div>
    ));
  };

  const handleScrollIntoTopOnFilterClick = () => {
    const menu = document.querySelector("#menu");
    if (menu) {
      const top = menu.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-1/5 lg:block hidden sticky top-24 h-fit p-4 bg-white border shadow-lg space-y-8 rounded-md max-h-[600px] overflow-y-scroll">
        <div className="flex items-center gap-2">
          <Image
            src={"/assets/icons/filter.svg"}
            alt="Filtre icone"
            width={24}
            height={24}
            quality={100}
            loading="lazy"
          />
          <h2 className="uppercase text-2xl font-black text-green">Filtres</h2>
        </div>
        <span className="w-full h-[0.02rem] block bg-gray-500"></span>
        <div className="space-y-4">
          <h4 className="font-black uppercase text-xl">Préférences</h4>
          <small className="italic">
            Ici, vous pouvez sélectionner vos préférences alimentaires.
          </small>
          {renderRadioGroup(
            preferences,
            selectedPreference,
            setSelectedPreference,
            "preference"
          )}
        </div>
        <div className="space-y-4">
          <h4 className="font-black uppercase text-xl">Allergies :</h4>
          <small className="italic">
            Ici, vous pouvez sélectionner les aliments auxquels vous êtes
            allergique.
          </small>
          {renderRadioGroup(
            allergies,
            selectedAllergy,
            setSelectedAllergy,
            "allergy"
          )}
        </div>

        <Separator />
      </div>

      <Accordion type="single" collapsible className="w-full lg:hidden block">
        <AccordionItem value="item-1">
          <AccordionTrigger>Filtrer les menus</AccordionTrigger>
          <AccordionContent>
            <div className="p-5 w-full">
              <div className="flex flex-col gap-4 ">
                <div className="space-y-4">
                  <h4 className="font-black uppercase text-xl">Préférences</h4>
                  <small className="italic">
                    Ici, vous pouvez sélectionner vos préférences alimentaires.
                  </small>
                  {renderRadioGroup(
                    preferences,
                    selectedPreference,
                    setSelectedPreference,
                    "preference"
                  )}
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-black uppercase text-xl">Allergies :</h4>
                  <small className="italic">
                    Ici, vous pouvez sélectionner les aliments auxquels vous
                    êtes allergique.
                  </small>
                  {renderRadioGroup(
                    allergies,
                    selectedAllergy,
                    setSelectedAllergy,
                    "allergy"
                  )}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

interface MenuDisplayProps {
  filteredMenu: Menu[];
}

const Separator = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-[0.85px] w-full bg-gray-300 my-4", className)}></div>
  );
};

const MenuDisplay: React.FC<MenuDisplayProps> = ({ filteredMenu }) => {
  return (
    <div className="flex-1 space-y-24">
      {filteredMenu.some((category) => category.items.length > 0) ? (
        filteredMenu.map((category, i) =>
          category.items.length > 0 ? (
            <AnimatePresence>
              <div key={i} id={category.href}>
                <AnimateContainer
                  key={i}
                  animate="popIn"
                  hasLayout
                  delay={i * 0.1}
                >
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full object-cover max-h-[200px] rounded-xl"
                  />
                  <h2 className="text-xl font-black my-8">
                    {category.title}{" "}
                    <span className="text-pink font-normal text-[18px] uppercase">
                      -{" "}
                      {
                        filteredMenu.filter((c) => c.href === category.href)[0]
                          .items.length
                      }{" "}
                      Produits
                    </span>
                  </h2>
                </AnimateContainer>

                <div
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-16 mt-16"
                  )}
                >
                  <AnimatePresence>
                    {category.items.map((item, itemIndex) => (
                      <AnimateContainer
                        animate="popIn"
                        hasLayout
                        delay={itemIndex * 0.1}
                        key={itemIndex}
                      >
                        <MenuItem item={item} category={category.title} />
                      </AnimateContainer>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </AnimatePresence>
          ) : null
        )
      ) : (
        <AnimateContainer animate="popIn" className="h-full">
          <div className="flex justify-center items-center h-full">
            <h2 className="text-xl font-black my-8">
              Aucun produit ne correspond à vos critères de recherche
            </h2>
          </div>
        </AnimateContainer>
      )}
    </div>
  );
};

const MenuItem = ({
  item,
  category,
}: {
  item: IMenuItem;
  category: string;
}) => {
  const renderAllergenIcon = (allergen: Allergen) => {
    switch (allergen) {
      case "gluten":
        return "/assets/icons/gluten.png";
      case "lactose":
        return "/assets/icons/lactose.png";
      case "crustace":
        return "/assets/icons/crustace.png";
      case "oeuf":
        return "/assets/icons/oeuf.png";
      case "poisson":
        return "/assets/icons/poisson.png";
      case "soja":
        return "/assets/icons/soja.png";
      case "celeri":
        return "/assets/icons/celeri.png";
      case "sesame":
        return "/assets/icons/sesame.png";
      case "fruit a coques":
        return "/assets/icons/fruit-a-coques.png";
      default:
        return "/assets/icons/arachide.png";
    }
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex cursor-pointer flex-col bg-white rounded-2xl border shadow-xl justify-around h-[300px]">
          <div className="-mt-12">
            {category === "Finger food" ||
            category === "Cool drink" ? (
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.size.width}
                height={item.image.size.height}
                quality={100}
                className="mx-auto object-contain max-h-[240px]"
              />
            ) : category === "Détox & Mocktails"  ? (
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.size.width}
                height={item.image.size.height}
                quality={100}
                className="mx-auto object-contain flex mb-8"
              />
            ) : category === "Desserts gourmands" && item.title === "Pavlova" ? (
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.size.width}
                height={item.image.size.height}
                quality={100}
                className="mx-auto object-contain relative top-8 mb-8 flex"
              />
            ) : <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.size.width}
                height={item.image.size.height}
                quality={100}
                className="mx-auto object-contain"
              /> }
          </div>
          <div className="-mt-8">
            <p className={cn("uppercase font-black text-lg px-4")}>
              {item.title}
            </p>

            <div className="flex justify-between items-end px-4 pb-4">
              <div className="flex flex-col gap-1">
                <small className="uppercase">1 pièce</small>
                <p className="font-black">
                  {item.price.unit}
                  {item.title !== "" && "0"}€
                </p>
              </div>

              {/* <div className="flex items-center gap-1">
            {item.allergensFree.map((allergen, i) => (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      className="cursor-pointer"
                      src={renderAllergenIcon(allergen.icon)}
                      alt="Allergen icon"
                      width={20}
                      height={20}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{allergen.text}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div> */}
            </div>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="max-w-5xl mx-auto pb-12">
        <DrawerHeader>
          <div className="flex flex-col pt-8 pl-8 md:flex-row items-center justify-between gap-12">
            <div>
              {category === "Finger food" ||
              category === "Détox & Mocktails" ||
              category === "Cool drink" ? (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={150}
                  height={100}
                  quality={100}
                  className="mx-auto object-contain max-h-[200px]"
                />
              ) : category === "Desserts gourmands" ? (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={200}
                  height={100}
                  quality={100}
                  className="mx-auto object-contain"
                />
              ) : category === "Dessert gourmand" &&
                item.title === "Pavlova" ? (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={250}
                  height={200}
                  quality={100}
                  className="mx-auto object-contain"
                />
              ) : (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={250}
                  height={200}
                  quality={100}
                  className="mx-auto object-contain"
                />
              )}
            </div>

            <div className="space-y-6 flex-1">
              <div className="space-y-4">
                <p className="uppercase">NOS {category}</p>
                <DrawerTitle className="text-2xl uppercase font-black">
                  {item.title}
                </DrawerTitle>
              </div>
              <div>
                <p className="text-pink uppercase font-bold text-lg">1 pièce</p>
                <p className="text-xl font-bold">{item.price.unit}0€</p>
              </div>
              {item.description && (
                <div className="space-y-2">
                  <p className="underline text-xl">COMPOSITION</p>
                  <DrawerDescription className="max-w-xl">
                    {item.description}
                  </DrawerDescription>
                </div>
              )}
            </div>
          </div>
        </DrawerHeader>
        <DrawerFooter className="absolute top-3 right-3">
          <DrawerClose>
            <X />
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
