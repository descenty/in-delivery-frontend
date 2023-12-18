import Categories from "@/components/catalog/categories";
import { get_all_parent_categories } from "@/services/category_service";

export default async function Home() {
  const categories = await get_all_parent_categories();
  return (
    <main className="flex flex-col justify-between w-[90%] max-w-[1200px] gap-10 pt-10">
      <h1 className="text-2xl font-semibold">Каталог</h1>
      <Categories categories={categories} />
    </main>
  );
}
