"use client";
import { Category } from "@/schemas/category";
import { Avatar, Card, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import Image from "next/image";

const LeftSideMenu = ({ categories, className }: { categories: Category[]; className?: string }) => {
  return (
    <Card className={`px-1 py-2 pointer-events-auto shadow-none ${className}`}>
      <Listbox variant="flat" aria-label="Listbox menu with sections">
        <ListboxSection title="Категории" showDivider>
          {categories.map((category) => (
            <ListboxItem
              className="h-[51px] flex flex-row items-center"
              key={category.slug}
              startContent={
                <Image
                  className="h-full w-auto object-contain rounded-full bg-default"
                  src={category.image}
                  alt="category image"
                  width={64}
                  height={64}
                />
              }
            >
              {category.title}
            </ListboxItem>
          ))}
        </ListboxSection>
      </Listbox>
    </Card>
  );
};

export default LeftSideMenu;
