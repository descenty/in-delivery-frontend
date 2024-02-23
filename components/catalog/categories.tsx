import categories from "@/data/categories";
import CategoryCard from "./categoryCard";
import Link from "next/link";
import { Category } from "@/schemas/category";

const Categories = ({ categories }: { categories: Category[] }) => (
  <div className="grid max-[1100px]:px-8 max-[1100px]:grid-cols-2 max-2xl:grid-cols-3 max-[1900px]:grid-cols-4 min-[1900px]:grid-cols-5 gap-8 place-content-center place-items-center">
    {categories.map((category) => (
      <Link key={category.slug} href={`catalog/${category.slug}`}>
        <CategoryCard category={category} />
      </Link>
    ))}
  </div>
);

export default Categories;
