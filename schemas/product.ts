export type Product = {
  slug: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  weight?: number;
  count?: number;
  available?: boolean;
  rating?: number;
  reviews?: number;
  nutrition?: {
    energy: number;
    protein: number;
    fat: number;
    carbohydrates: number;
  };
};
