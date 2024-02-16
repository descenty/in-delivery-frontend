import { Cart } from "@/schemas/cart";
import { Product } from "@/schemas/product";
import { getCart } from "@/services/cart_service";
import { createEffect, createEvent, createStore, sample } from "effector";

export const openCart = createEvent();
export const closeCart = createEvent();
export const addProductToCart = createEvent<Product>();

export const pageMounted = createEvent();

export const getCartFx = createEffect({
  handler: async () => await getCart(),
});
export const $isCartOpened = createStore(false)
  .on(openCart, () => true)
  .on(closeCart, () => false);

export const $cart = createStore<Cart>({ total_price: 0, products: [] }).on(getCartFx.doneData, (_, cart) => {
  return cart;
});

sample({
  clock: pageMounted,
  target: [getCartFx],
});
