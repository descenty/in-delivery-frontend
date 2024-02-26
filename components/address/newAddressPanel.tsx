"use client";
import { useEffect, useMemo, useState } from "react";
import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { Address } from "@/schemas/address";
import { useStore } from "effector-react";
import { $isNewAddressModalOpened, closeNewAddressModal } from "@/stores/newAddressModalStore";
import { Button, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import dynamic from "next/dynamic";
import axiosInstance from "@/utils/axiosInstance";
import { addDeliveryAddress, getDeliveryAddresses, selectDeliveryAddress } from "@/services/addressService";
import { setCustomer, setDeliveryAddresses } from "@/stores/customerStore";
import { getCustomer } from "@/services/customerService";

const NewAddressModal = () => {
  const isNewAddressModalOpened = useStore($isNewAddressModalOpened);
  const [address, setAddress] = useState<DaDataSuggestion<DaDataAddress> | undefined>();
  const [selectedAddress, setSelectedAddress] = useState<Address>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedAddress)
      setTimeout(() => document.querySelector(".leaflet-marker-icon")?.setAttribute("src", "/marker.svg"), 50);
  }, [selectedAddress]);

  useEffect(() => {
    if (address) {
      try {
        axiosInstance().then(async (axios) => {
          axios.post<Address>("/clean-address", { address: address.value }).then((response) => {
            if (response.data.latitude) {
              setSelectedAddress(response.data);
              setError(null);
            } else {
              setError("некорректный адрес доставки");
              setSelectedAddress(undefined);
            }
          });
        });
      } catch (ex) {
        console.log(ex);
      }
    }
  }, [address]);

  const Map = useMemo(() => dynamic(() => import("./map"), { ssr: false }), []);
  return (
    <Modal
      isOpen={isNewAddressModalOpened}
      onClose={() => closeNewAddressModal()}
      scrollBehavior="inside"
      placement="center"
      className="max-h-[90vh] h-[500px] overflow-hidden"
      classNames={{
        closeButton: "absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-2",
      }}
    >
      <ModalContent>
        <ModalHeader className="text-xl">Новый адрес доставки</ModalHeader>
        <ModalBody className="flex flex-col justify-between gap-4 p-6">
          <div className="flex flex-col gap-4">
            <span className="text-gray-700 mb-[-12px] text-sm">адрес доставки</span>
            <AddressSuggestions token={process.env.NEXT_PUBLIC_DADATA_TOKEN!} value={address} onChange={setAddress} />
          </div>
          {error && <span>{error}</span>}
          <Map className="w-full h-[300px] z-0" address={selectedAddress} />
          <Button
            disabled={!selectedAddress}
            color="primary"
            onClick={async () => {
              await addDeliveryAddress(selectedAddress!);
              const deliveryAddresses = await getDeliveryAddresses();
              setDeliveryAddresses(deliveryAddresses);
              selectDeliveryAddress(deliveryAddresses[deliveryAddresses.length - 1].id);
              setCustomer(await getCustomer());
              closeNewAddressModal();
            }}
          >
            Добавить адрес
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewAddressModal;
