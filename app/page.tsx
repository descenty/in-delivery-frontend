import Categories from "@/components/catalog/categories";
import { get_all_parent_categories } from "@/services/category_service";

export default async function Home() {
  const categories = await get_all_parent_categories();
  return (
    <div className="flex flex-col justify-between w-full gap-10 px-8 py-6">
      <h1 className="text-2xl font-semibold">Каталог</h1>
      <Categories categories={categories} />
    </div>
  );
}
