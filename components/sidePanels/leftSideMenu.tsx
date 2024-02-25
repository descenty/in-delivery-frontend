"use client";
import { Category } from "@/schemas/category";
import { Avatar, Card, Link, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LeftSideMenu = ({ categories, className }: { categories: Category[]; className?: string }) => {
  const router = useRouter();
  return (
    <Card className={`px-1 pt-2 pointer-events-auto overflow-y-auto no-scrollbar shadow-none ${className}`}>
      <Listbox variant="flat" aria-label="Listbox menu with sections">
        <ListboxSection classNames={{ heading: "text-sm", divider: "hidden" }} title="Категории" showDivider>
          {categories.map((category) => (
            <ListboxItem
              key={category.slug}
              className="h-[47px] flex flex-row items-center"
              onClick={() => router.push(`/catalog/${category.slug}`)}
              textValue={category.title}
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
