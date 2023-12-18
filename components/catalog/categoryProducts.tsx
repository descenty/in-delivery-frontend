import { Product } from "@/schemas/product";
import ProductCard from "./productCard";

const CategoryProducts = ({ products }: { products: Product[] }) => (
  <div className="flex flex-row gap-4">
    {products.length > 0 ? (
      products?.map((product) => <ProductCard key={product.id} product={product} />)
    ) : (
      <span>В данной категории нет товаров</span>
    )}
  </div>
);

export default CategoryProducts;
