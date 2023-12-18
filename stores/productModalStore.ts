import { Product } from "@/schemas/product";
import { useDisclosure } from "@nextui-org/react";
import { createEvent, createStore, createEffect } from "effector";

export const setModalProduct = createEvent<Product | null>();

export const $modalProduct = createStore<Product | null>(null).on(setModalProduct, (_, product) => product);
