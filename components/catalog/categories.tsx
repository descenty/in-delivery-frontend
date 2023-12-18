import categories from "@/data/categories";
import CategoryCard from "./categoryCard";
import Link from "next/link";
import { Category } from "@/schemas/category";

const Categories = ({ categories }: { categories: Category[] }) => (
  <div className="grid grid-cols-2 phone:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 place-content-center place-items-center w-full">
    {categories.map((category) => (
      <Link key={category.slug} href={`catalog/${category.slug}`}>
        <CategoryCard category={category} />
      </Link>
    ))}
  </div>
);

export default Categories;
