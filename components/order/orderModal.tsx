"use client";
import { Avatar, Badge, Chip, Listbox, ListboxItem, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useStore } from "effector-react";
import { $modalOrder, setModalOrder } from "@/stores/orderModal";
import { ruDate } from "@/utils/localDate";
import { setModalProduct } from "@/stores/productModalStore";
import { OrderStatus, orderStatusColor, orderStatusText } from "./static/orderStatus";

const OrderModal = () => {
  const modalOrder = useStore($modalOrder);
  if (!modalOrder) return null;
  return (
    <Modal
      isOpen={modalOrder ? true : false}
      onClose={() => setModalOrder(null)}
      scrollBehavior="inside"
      placement="center"
      className="max-h-[90vh] overflow-hidden"
      classNames={{
        closeButton: "absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-2",
      }}
    >
      <ModalContent>
        <ModalHeader className="text-xl">Заказ от {ruDate(modalOrder.created_at)}</ModalHeader>
        <ModalBody className="pb-4 pt-0 flex flex-col gap-4">
          <div className="flex flex-col w-full gap-[1em]">
            <p>
              Адрес доставки: <b>{modalOrder.delivery_address}</b>
            </p>
            <p>
              Сумма заказа: <b>{modalOrder.total_price} ₽</b>
            </p>
            <Chip color={orderStatusColor[modalOrder.status as OrderStatus]}>
              {orderStatusText[modalOrder.status as OrderStatus]}
            </Chip>
          </div>
          <h4 className="text-lg font-semibold">Продукты</h4>
          <Listbox variant="flat" aria-label="Listbox menu with sections">
            {modalOrder.products.map((orderProduct, _) => (
              <ListboxItem
                key={orderProduct.product.id}
                className="flex flex-row items-center gap-3"
                textValue={orderProduct.product.title}
                startContent={
                  <Badge content={orderProduct.quantity} color="primary">
                    <Avatar src={orderProduct.product.image!} alt="product image" />
                  </Badge>
                }
                onClick={() => setModalProduct(orderProduct.product)}
              >
                <div className="flex flex-col gap-0">
                  <p className="whitespace-break-spaces text-base">{orderProduct.product.title}</p>
                  <p className="font-semibold text-[16px] text-gray-700">
                    {orderProduct.product.price * orderProduct.quantity} ₽
                  </p>
                </div>
              </ListboxItem>
            ))}
          </Listbox>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
