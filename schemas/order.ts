import { UUID } from "crypto";

export type Order = {
  id: UUID;
  user_id: UUID;
  delivery_address: string;
  total_price: number;
  status: string;
  created_at: string;
  updated_at: string;
};
