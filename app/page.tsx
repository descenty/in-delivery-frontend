import Categories from "@/components/catalog/categories";
import { get_all_parent_categories } from "@/services/categoryService";

export default async function Home() {
  const categories = await get_all_parent_categories();
  return (
    <div className="flex flex-col justify-between w-full gap-10 px-8 py-6">
      <Categories categories={categories} />
    </div>
  );
}
