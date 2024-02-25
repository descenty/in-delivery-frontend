import { Customer } from "@/schemas/customer";
import { Order } from "@/schemas/order";
import { createEvent, createStore } from "effector";

export const setCustomerOrders = createEvent<Order[]>();

export const $customerOrders = createStore<Order[]>([]).on(setCustomerOrders, (_, orders) => orders);
