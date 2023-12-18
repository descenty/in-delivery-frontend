import Categories from "@/components/catalog/categories";
import CategorySubcategories from "@/components/catalog/categorySubcategories";
import { get_category } from "@/services/category_service";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const category = await get_category(params.slug);
  return (
    <main className="flex flex-col justify-between w-[90%] max-w-[1200px] gap-10 pt-10">
      <h1 className="text-3xl font-semibold">{category.title}</h1>
      <CategorySubcategories category={category} />
    </main>
  );
};
export default CategoryPage;
