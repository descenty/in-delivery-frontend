"use client";
import { Address } from "@/schemas/address";
import { deleteDeliveryAddress, getDeliveryAddresses, selectDeliveryAddress } from "@/services/addressService";
import { $customer, $deliveryAddresses, setCustomer, setDeliveryAddresses } from "@/stores/customerStore";
import { openNewAddressModal } from "@/stores/newAddressModalStore";
import axiosInstance from "@/utils/axiosInstance";
import { Button, Chip, Select, SelectItem } from "@nextui-org/react";
import { useStore } from "effector-react";
import { getSession, signIn } from "next-auth/react";
import { Key, useEffect, useState } from "react";
import CloseIcon from "../icons/closeIcon";
import { getCustomer } from "@/services/customerService";

const AddressSelect = ({ className }: { className: string }) => {
  const deliveryAddresses = useStore($deliveryAddresses);
  const customer = useStore($customer);
  useEffect(() => {
    getDeliveryAddresses().then((addresses) => setDeliveryAddresses(addresses));
    getCustomer().then((customer) => setCustomer(customer));
  }, []);
  return (
    customer && (
      <Select
        label="Адрес доставки"
        className={className}
        onClick={async () => !(await getSession()) && signIn("keycloak")}
        onSelectionChange={async (keys) => {
          if (keys.currentKey === "new-address") openNewAddressModal();
          else {
            await selectDeliveryAddress(keys.currentKey);
            setCustomer(await getCustomer());
          }
        }}
        defaultSelectedKeys={customer?.delivery_address_id ? [customer.delivery_address_id] : []}
        classNames={{
          value: "text-base",
          description: "text-sm",
        }}
      >
        {deliveryAddresses.length > 0 &&
          deliveryAddresses.map((address) => (
            <SelectItem key={address.id} value={address.id} textValue={address.name}>
              {address.name}
              <Button
                className="w-unit-6 min-w-unit-6 h-unit-6 absolute bg-transparent text-gray-600 right-8 top-[6px] transition-colors duration-200"
                isIconOnly
                color="danger"
                radius="sm"
                onClick={async () => {
                  await deleteDeliveryAddress(address.id);
                  setCustomer(await getCustomer());
                }}
                startContent={<CloseIcon />}
              />
            </SelectItem>
          ))}
        <SelectItem key="new-address" value="new-address" textValue="Добавить новый адрес">
          <span className="font-semibold">Добавить новый адрес</span>
        </SelectItem>
      </Select>
    )
  );
};

export default AddressSelect;
