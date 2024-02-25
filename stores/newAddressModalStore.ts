import { createEvent, createStore } from "effector";

export const openNewAddressModal = createEvent();
export const closeNewAddressModal = createEvent();

export const $isNewAddressModalOpened = createStore(false)
  .on(openNewAddressModal, () => true)
  .on(closeNewAddressModal, () => false);
