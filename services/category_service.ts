import { Category } from "@/schemas/category";
import { Product } from "@/schemas/product";
import axios from "axios";

export const get_all_parent_categories = async (): Promise<Category> =>
  (await axios.get(`${process.env.API_URL}/categories/all_parent`)).data.map((category: Category) => {
    return {
      slug: category.slug,
      title: category.title,
      image: `${process.env.S3_URL}/categories/${category.slug}.png`,
      product_count: category.product_count,
    };
  });

export const get_category = async (slug: string): Promise<Category> => {
  const category: Category = (await axios.get(`${process.env.API_URL}/categories/${slug}`)).data;
  console.log(category.product_count);
  return {
    slug: category.slug,
    title: category.title,
    image: `${process.env.S3_URL}/categories/${category.slug}.png`,
    product_count: category.product_count,
    products: category.products,
    subcategories: category.subcategories.map((subcategory: Category) => ({
      slug: subcategory.slug,
      title: subcategory.title,
      image: `${process.env.S3_URL}/categories/${subcategory.slug}.png`,
      product_count: subcategory.product_count,
      subcategories: [],
      products: subcategory.products?.map((product: Product) => ({
        ...product,
        image: `${process.env.S3_URL}/products/${product.id}.png`,
      })),
    })),
  };
};
