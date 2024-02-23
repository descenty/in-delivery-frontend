import { UUID } from "crypto";
import { Product } from "./product";

export type CartData = {
  total_price: number;
  products: CartProduct[];
};

export type CartProduct = {
  product: Product;
  quantity: number;
};
