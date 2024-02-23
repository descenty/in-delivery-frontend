import Categories from "@/components/catalog/categories";
import CategorySubcategories from "@/components/catalog/categorySubcategories";
import { get_category } from "@/services/category_service";

import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: params.slug,
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
