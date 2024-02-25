import CategorySubcategories from "@/components/catalog/categorySubcategories";
import { get_category } from "@/services/categoryService";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = await get_category(params.slug);
  return {
    title: category.title,
  };
}

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const category = await get_category(params.slug);

  return (
    <main className="flex flex-col justify-between px-8 gap-10">
      <CategorySubcategories category={category} />
    </main>
  );
};
export default CategoryPage;
