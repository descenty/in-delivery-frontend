import { AddressDTO } from "@/schemas/address";
import { Customer } from "@/schemas/customer";
import { createEffect, createEvent, createStore, sample } from "effector";

export const setCustomer = createEvent<Customer>();

export const $customer = createStore<Customer | null>(null).on(setCustomer, (_, customer) => customer);

export const setDeliveryAddresses = createEvent<AddressDTO[]>();

export const $deliveryAddresses = createStore<AddressDTO[]>([]).on(setDeliveryAddresses, (_, addresses) => addresses);
