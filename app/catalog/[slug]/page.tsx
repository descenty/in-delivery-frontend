import ProductCard from "@/components/product/productCard";
import { Product } from "@/schemas/product";
import { fetchAPI } from "@/utils/fetchAPI";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const products = await fetchAPI<Product[]>(`/catalog/${params.slug}`);
  return (
    <>
      {products ? (
        products.map((product) => <ProductCard key={product.slug} product={product} />)
      ) : (
        <h1>Товаров нет</h1>
      )}
    </>
  );
};
export default CategoryPage;
