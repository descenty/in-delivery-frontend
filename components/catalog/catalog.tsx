import categories from "@/data/categories";
import CatalogCard from "./catalogCard";
import Link from "next/link";

const Catalog = () => (
  <div className="grid grid-cols-2 phone:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 place-content-center place-items-center w-full">
    {categories.map((category) => (
      <Link key={category.slug} href={`catalog/${category.slug}`}>
        <CatalogCard category={category} />
      </Link>
    ))}
  </div>
);

export default Catalog;
