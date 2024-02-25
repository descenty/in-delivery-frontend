import { Category } from "@/schemas/category";
import { Product } from "@/schemas/product";
import axios from "axios";

export const get_all_parent_categories = async (): Promise<Category[]> =>
  (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/all_parent`)).data;

export const get_category = async (slug: string): Promise<Category> =>
  (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories/${slug}`)).data;
