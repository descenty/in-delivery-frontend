import categories from "@/data/categories";
import CatalogCard from "./catalogCard";

const Catalog = () => (
  <div className="grid grid-cols-2 phone:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 place-content-center place-items-center w-full">
    {categories.map((category) => (
      <CatalogCard key={category.id} category={category} />
    ))}
  </div>
);

export default Catalog;
