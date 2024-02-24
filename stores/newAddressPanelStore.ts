import { createEvent, createStore } from "effector";

export const openNewAddressPanel = createEvent();
export const closeNewAddressPanel = createEvent();

export const $isNewAddressPanelOpened = createStore(false)
  .on(openNewAddressPanel, () => true)
  .on(closeNewAddressPanel, () => false);
