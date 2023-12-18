import { Category } from "@/schemas/category";
import { Image } from "@nextui-org/image";
import ProductCard from "./productCard";
import { useMemo } from "react";
import CategoryProducts from "./categoryProducts";

const CategorySubcategories = ({ category }: { category: Category }) => {
  return (
    <div className="flex flex-col gap-8">
      {category.subcategories.map((subcategory: Category) => (
        <div key={subcategory.slug} className="flex flex-col gap-4">
          <h2 className="text-2xl">{subcategory.title}</h2>
          <CategoryProducts products={subcategory.products} />
        </div>
      ))}
    </div>
  );
};

export default CategorySubcategories;
