import { Cart } from "@/schemas/cart";
import { Category } from "@/schemas/category";
import { Product } from "@/schemas/product";
import { getAccessToken } from "@/utils/sessionTokenAccessor";
import axios from "axios";
import { getSession } from "next-auth/react";

export const getCart = async (): Promise<Cart> => {
  const cart = (
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
      headers: {
        Authorization: `Bearer ${(await getSession()).access_token}`,
      },
    })
  ).data;
  return cart;
};
