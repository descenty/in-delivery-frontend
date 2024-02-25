import { CartData } from "@/schemas/cart";
import { getCart } from "@/services/cartService";
import { createEffect, createEvent, createStore, sample } from "effector";

export const openCart = createEvent();
export const closeCart = createEvent();

// not used
export const appStarted = createEvent();

export const setCart = createEvent<CartData>();

export const getCartFx = createEffect({
  handler: async () => await getCart(),
});

export const $isCartOpened = createStore(false)
  .on(openCart, () => true)
  .on(closeCart, () => false);

export const $cart = createStore<CartData>({ total_price: -1, products: [] })
  .on(getCartFx.doneData, (_, cart) => cart)
  .on(setCart, (_, cart) => cart);

sample({
  clock: appStarted,
  target: [getCartFx],
});
