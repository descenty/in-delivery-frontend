export type Product = {
  id: string;
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
