"use client";
import { Button, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { $modalProduct, setModalProduct } from "@/stores/productModalStore";
import { useStore } from "effector-react";
import Image from "next/image";
import { addToCart } from "@/services/cartService";
import { $cart, setCart } from "@/stores/cartStore";

const ProductModal = () => {
  const modalProduct = useStore($modalProduct);
  const cartData = useStore($cart);
  return (
    <Modal
      isOpen={modalProduct ? true : false}
      onClose={() => setModalProduct(null)}
      scrollBehavior="inside"
      placement="center"
      className="max-h-[90vh] overflow-hidden"
      classNames={{
        closeButton: "absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-2",
      }}
    >
      {modalProduct && (
        <ModalContent>
          <ModalBody className="p-0">
            <Image
              className="z-[-1] rounded-none"
              quality={100}
              src={modalProduct.image}
              width={768}
              height={768}
              alt={`${modalProduct.title} image`}
            />
            <div className="p-4 flex flex-col gap-4">
              <span className="text-xl font-semibold">{modalProduct.title}</span>
              <p className="text-gray-500">{modalProduct.description}</p>
              <span className="mt-[-2px] text-[18px] text-pink-600 font-semibold">{modalProduct.price}&nbsp;₽</span>
              <Button
                color="primary"
                isDisabled={cartData.products.find((product) => product.product.id === modalProduct.id) ? true : false}
                onClick={async () => {
                  setCart(await addToCart({ product_id: modalProduct.id, quantity: 1 }));
                  setModalProduct(null);
                }}
              >
                {cartData.products.find((product) => product.product.id === modalProduct.id)
                  ? "Товар уже в корзине"
                  : "Добавить в корзину"}
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      )}
    </Modal>
  );
};

export default ProductModal;
