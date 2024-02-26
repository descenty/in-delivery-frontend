import { UUID } from "crypto";
import { Product } from "./product";

export type Order = {
  id: UUID;
  user_id: UUID;
  delivery_address: string;
  total_price: number;
  status: string;
  created_at: string;
  products: OrderProduct[];
};

export type OrderProduct = {
  product: Product;
  quantity: number;
};
