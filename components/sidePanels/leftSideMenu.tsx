"use client";
import { Category } from "@/schemas/category";
import { Avatar, Card, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";

const LeftSideMenu = ({ categories }: { categories: Category[] }) => {
  return (
    <Card className="w-[240px] h-[84vh] px-1 py-2">
      <Listbox variant="flat" aria-label="Listbox menu with sections">
        <ListboxSection title="Категории" showDivider>
          {categories.map((category) => (
            <ListboxItem key={category.slug} startContent={<Avatar radius="none" src={category.image} size="sm" />}>
              {category.title}
            </ListboxItem>
          ))}
        </ListboxSection>
      </Listbox>
    </Card>
  );
};

export default LeftSideMenu;
