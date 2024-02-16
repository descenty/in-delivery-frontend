import { UUID } from "crypto";
import { Product } from "./product";

export type Cart = {
  total_price: number;
  products: CartProduct[];
};

export type CartProduct = {
  product: Product;
  quantity: number;
};
