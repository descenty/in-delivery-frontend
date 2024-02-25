import { UUID } from "crypto";

export type Product = {
  id: UUID;
  title: string;
  price: number;
  category_slug: string;
  description?: string;
  image?: string;
  best_before?: number;
  energy?: number;
  proteins?: number;
  fats?: number;
  carbohydrates?: number;
  weight?: number;
};
