import { createEvent, createStore } from "effector";

export const openCustomerOrdersModal = createEvent();
export const closeCustomerOrdersModal = createEvent();

export const $isCustomerOrdersModalOpened = createStore(false)
  .on(openCustomerOrdersModal, () => true)
  .on(closeCustomerOrdersModal, () => false);
