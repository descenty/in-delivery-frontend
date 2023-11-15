import { UUID } from "crypto";
import { Product } from "./product";

export type Category = {
  slug: string;
  title: string;
  image: string;
  products?: Product[];
};
