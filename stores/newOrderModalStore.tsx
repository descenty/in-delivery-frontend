import { createEvent, createStore } from "effector";

export const openNewOrderModal = createEvent();
export const closeNewOrderModal = createEvent();

export const $isNewOrderModalOpened = createStore(false)
  .on(openNewOrderModal, () => true)
  .on(closeNewOrderModal, () => false);
