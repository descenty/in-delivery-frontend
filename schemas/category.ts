import { UUID } from "crypto";
import { Product } from "./product";

export type Category = {
  slug: string;
  title: string;
  image: string;
  product_count: number;
  subcategories: Category[];
  products: Product[];
};
