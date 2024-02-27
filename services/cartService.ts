import { AddToCartRequest, CartData } from "@/schemas/cart";
import axiosInstance from "@/utils/axiosInstance";

export const getCart = async (): Promise<CartData> => (await axiosInstance()).get("/cart").then((res) => res.data);

export const addToCart = async (addRequest: AddToCartRequest): Promise<CartData> =>
  (await (await axiosInstance()).post("/cart/products", addRequest)).data;

export const updateCartProduct = async (productId: string, quantity: number): Promise<CartData> =>
  (await (await axiosInstance()).patch(`/cart/products/${productId}`, { quantity })).data;

export const deleteProductFromCart = async (productId: string): Promise<CartData> =>
  (await (await axiosInstance()).delete(`/cart/products/${productId}`)).data;
