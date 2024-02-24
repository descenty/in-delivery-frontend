"use client";
import { useEffect, useMemo, useState } from "react";
import axios, { AxiosError } from "axios";
import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { Address } from "@/schemas/address";
import { useStore } from "effector-react";
import { $isNewAddressPanelOpened, closeNewAddressPanel } from "@/stores/newAddressPanelStore";
import { Button, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { getSession } from "next-auth/react";
import dynamic from "next/dynamic";

const NewAddressPanel = () => {
  const isNewAddressPanelOpened = useStore($isNewAddressPanelOpened);
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
        getSession().then(async () => {
          axios
            .post<Address>(
              `${process.env.NEXT_PUBLIC_API_URL}/geo/clean-address`,
              {
                address: address.value,
              },
              { headers: { Authorization: `Bearer ${(await getSession())!.access_token}` } }
            )
            .then((response) => {
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

  const addNewSavedAddress = async () => {
    if (selectedAddress) {
      try {
        await axios.post("add-saved-address/", {
          address: selectedAddress.name,
        });
        closeNewAddressPanel();
      } catch (e) {
        const error = e as AxiosError;
        if (error) {
          error.response!.status === 403 && setError("Выбранный адрес уже добавлен");
          error.response!.status === 404 && setError("В этом городе нет пиццерии");
          error.response!.status === 400 && setError("Не удалось добавить новый адрес");
        } else closeNewAddressPanel();
      }
    }
  };

  const Map = useMemo(() => dynamic(() => import("./map"), { ssr: false }), []);
  return (
    <Modal
      isOpen={isNewAddressPanelOpened}
      onClose={() => closeNewAddressPanel()}
      scrollBehavior="inside"
      placement="center"
      className="max-h-[90vh] h-[500px] overflow-hidden"
      classNames={{
        closeButton: "absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-2",
      }}
    >
      <ModalContent>
        <ModalHeader className="text-xl">Новый адрес доставки</ModalHeader>
        <ModalBody>
          <div>
            <AddressSuggestions token={process.env.NEXT_PUBLIC_DADATA_TOKEN!} value={address} onChange={setAddress} />
          </div>
          {error && <span>{error}</span>}
          <Map className="w-full h-[300px] z-0" address={selectedAddress} />
          <Button
            disabled={!selectedAddress}
            onClick={async () => {
              await addNewSavedAddress();
            }}
          >
            Добавить адрес
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewAddressPanel;
