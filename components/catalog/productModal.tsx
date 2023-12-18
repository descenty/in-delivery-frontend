"use client";
import { Product } from "@/schemas/product";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, Tooltip, useDisclosure, Image } from "@nextui-org/react";
import VacanciesFilters from "../vacancies/filters/vacanciesFilters";
import { $modalProduct, setModalProduct } from "@/stores/productModalStore";
import { useStore } from "effector-react";

const ProductModal = () => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const modalProduct = useStore($modalProduct);
  return (
    <>
      <Modal
        isOpen={modalProduct ? true : false}
        onClose={() => setModalProduct(null)}
        scrollBehavior="inside"
        placement="center"
        className="max-h-[90vh]"
      >
        {modalProduct && (
          <ModalContent>
            <ModalBody className="p-2">
              <Image src={modalProduct.image} alt={`${modalProduct.title} image`} />
              <div className="p-1 flex flex-col gap-4">
                <span className="text-xl font-semibold">{modalProduct.title}</span>
                <p className="text-gray-500">{modalProduct.description}</p>
                <span className="mt-[-2px] text-[18px] text-pink-600 font-semibold">{modalProduct.price}&nbsp;₽</span>
              </div>
              <Button color="primary">Добавить в корзину</Button>
            </ModalBody>
          </ModalContent>
        )}
      </Modal>
    </>
  );
};

export default ProductModal;
