import { createEvent, createStore } from "effector";

export const openCart = createEvent();
export const closeCart = createEvent();

export const $isCartOpened = createStore(false)
  .on(openCart, () => true)
  .on(closeCart, () => false);
