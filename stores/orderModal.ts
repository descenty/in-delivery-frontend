import { Order } from "@/schemas/order";
import { createEvent, createStore } from "effector";

export const setModalOrder = createEvent<Order | null>();

export const $modalOrder = createStore<Order | null>(null).on(setModalOrder, (_, order) => order);
