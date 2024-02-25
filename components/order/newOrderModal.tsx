"use client";
import {
  Avatar,
  Badge,
  Button,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { $modalProduct, setModalProduct } from "@/stores/productModalStore";
import { useStore } from "effector-react";
import Image from "next/image";
import { addToCart } from "@/services/cartService";
import { $cart, setCart } from "@/stores/cartStore";
import { $isNewOrderModalOpened, closeNewOrderModal } from "@/stores/newOrderModalStore";

const NewOrderModal = () => {
  const isNewOrderModalOpened = useStore($isNewOrderModalOpened);
  const cartData = useStore($cart);
  return (
    <Modal
      isOpen={isNewOrderModalOpened}
      onClose={() => closeNewOrderModal()}
      scrollBehavior="inside"
      placement="center"
      className="max-h-[90vh] overflow-hidden"
      classNames={{
        closeButton: "absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-2",
      }}
    >
      <ModalContent>
        <ModalHeader className="text-xl">Новый заказ</ModalHeader>
        <ModalBody className="pb-4 pt-0">
          <Listbox variant="flat" aria-label="Listbox menu with sections">
            {cartData.products.map((cartProduct, index) => (
              <ListboxItem
                key={cartProduct.product.id}
                className="flex flex-row items-center gap-3"
                textValue={cartProduct.product.title}
                startContent={
                  <Badge content="2" color="primary">
                    <Avatar src={cartProduct.product.image!} alt="product image" />
                  </Badge>
                }
              >
                <div className="flex flex-col gap-0">
                  <p className="whitespace-break-spaces text-base">{cartProduct.product.title}</p>
                  <p className="font-semibold text-[16px] text-gray-700">
                    {cartProduct.product.price * cartProduct.quantity} ₽
                  </p>
                </div>
              </ListboxItem>
            ))}
          </Listbox>
          <div className="flex flex-col w-full gap-[1em] px-4">
            <span className="ml-[10px] tracking-[1px]">
              Итого: <b>{cartData.total_price} ₽</b>
            </span>
            <Button size="lg" color="primary" onClick={() => closeNewOrderModal()}>
              Оформить заказ
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NewOrderModal;
