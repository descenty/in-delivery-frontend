import { Address, AddressDTO } from "@/schemas/address";
import { Customer } from "@/schemas/customer";
import axiosInstance from "@/utils/axiosInstance";
import { UUID } from "crypto";
import { getSession } from "next-auth/react";

export const getDeliveryAddresses = async (): Promise<AddressDTO[]> => {
  if (!(await getSession())) return [];
  return (await (await axiosInstance()).get("/delivery-addresses")).data;
};

export const addDeliveryAddress = async (address: Address): Promise<void> =>
  (await (await axiosInstance()).post("/delivery-addresses", address)).data;

export const deleteDeliveryAddress = async (addressId: UUID): Promise<AddressDTO> =>
  (await (await axiosInstance()).delete(`/delivery-addresses/${addressId}`)).data;

export const selectDeliveryAddress = async (addressId: string): Promise<AddressDTO> =>
  (await (await axiosInstance()).put(`/delivery-addresses/${addressId}`)).data;
