"use client";
import { Order } from "@/schemas/order";
import { getCustomerOrders } from "@/services/orderService";
import { $isCustomerOrdersModalOpened, closeCustomerOrdersModal } from "@/stores/customerOrdersModalStore";
import { $customerOrders, setCustomerOrders } from "@/stores/customerOrdersStore";
import { Listbox, ListboxItem, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useStore } from "effector-react";
import { useEffect } from "react";

const CustomerOrdersModal = () => {
  const isCustomerOrdersModalOpened = useStore($isCustomerOrdersModalOpened);
  const customerOrders = useStore($customerOrders);
  useEffect(() => {
    if (isCustomerOrdersModalOpened) getCustomerOrders().then((orders) => setCustomerOrders(orders));
  }, [isCustomerOrdersModalOpened]);
  return (
    <Modal
      isOpen={isCustomerOrdersModalOpened}
      onClose={() => closeCustomerOrdersModal()}
      scrollBehavior="inside"
      placement="center"
      className="max-h-[90vh] min-h-[200px] overflow-hidden"
      classNames={{
        closeButton: "absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-2",
      }}
    >
      <ModalContent>
        <ModalHeader className="text-xl">Заказы</ModalHeader>
        <ModalBody className="pb-8 flex flex-col justify-center items-center">
          {customerOrders.length === 0 ? (
            <p className="text-center text-gray-500">У вас пока нет заказов</p>
          ) : (
            <Listbox variant="flat" aria-label="Listbox menu with sections">
              {customerOrders.map((order: Order) => (
                <ListboxItem
                  key={order.id}
                  className="flex flex-row items-center gap-3"
                  textValue={`Заказ от ${order.created_at}`}
                >
                  <div className="flex flex-col gap-0">
                    <p className="whitespace-break-spaces text-base">{`Заказ от ${order.created_at}`}</p>
                    <p className="font-semibold text-[16px] text-gray-700">{order.total_price} ₽</p>
                  </div>
                </ListboxItem>
              ))}
            </Listbox>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomerOrdersModal;