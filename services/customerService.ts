import { Address, AddressDTO } from "@/schemas/address";
import { Customer } from "@/schemas/customer";
import axiosInstance from "@/utils/axiosInstance";
import { UUID } from "crypto";
import { getSession } from "next-auth/react";

export const getCustomer = async (): Promise<Customer> => (await (await axiosInstance()).get("/customer")).data;
