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


export type AddToCartRequest = {
  product_id: UUID;
  quantity: number;
};