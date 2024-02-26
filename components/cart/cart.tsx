"use client";
import clsx from "clsx";
import { Avatar, Button, Card, CardBody, CardHeader, Listbox, ListboxItem, Spinner } from "@nextui-org/react";
import EmptyCartIcon from "../icons/emptyCartIcon";
import PlusIcon from "../icons/plusIcon";
import MinusIcon from "../icons/minusIcon";
import { setCart } from "@/stores/cartStore";
import { CartData } from "@/schemas/cart";
import { deleteProductFromCart, getCart, updateCartProduct } from "@/services/cartService";
import { useState } from "react";
import CloseIcon from "../icons/closeIcon";
import { openNewOrderModal } from "@/stores/newOrderModalStore";
import { setModalProduct } from "@/stores/productModalStore";

const Cart = ({ cartData }: { cartData?: CartData }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Card className="shadow-none h-full">
      <CardHeader>
        <h3 className="text-[1.17em] ml-2 font-semibold tracking-wider">Корзина</h3>
      </CardHeader>
      <CardBody className="px-0 flex flex-col justify-between">
        {!cartData || !cartData.products || cartData.products.length == 0 ? (
          <div
            data-testid="cart-empty"
            className={clsx(
              "relative",
              "w-full",
              "h-full",
              "pb-6",
              "flex",
              "flex-col",
              "justify-center",
              "items-center",
              "self-center",
              "gap-1"
            )}
          >
            <EmptyCartIcon />
            <span>Корзина пуста</span>
          </div>
        ) : (
          <>
            <div className={clsx("flex", "flex-col", "w-full", "h-[350px]", "overflow-y-auto", "mb-[20px]", "gap-2")}>
              {isLoading ? (
                <div className="w-full h-full flex flex-row justify-center items-center">
                  <Spinner />
                </div>
              ) : (
                <Listbox className="px-2" variant="flat" aria-label="Listbox menu with sections">
                  {/* {cart.notLoaded && <h4>Не удалось загрузить корзину</h4>} */}
                  {cartData.products.map((cartProduct, index) => (
                    <ListboxItem
                      key={cartProduct.product.id}
                      className="flex flex-row items-center gap-3"
                      textValue={cartProduct.product.title}
                      startContent={<Avatar src={cartProduct.product.image!} alt="product image" />}
                      onClick={() => setModalProduct(cartProduct.product)}
                    >
                      <div className="flex flex-col gap-0">
                        <div className="flex flex-row justify-between items-center">
                          <p className="whitespace-break-spaces text-base">{cartProduct.product.title}</p>
                          <Button
                            isIconOnly
                            size="sm"
                            startContent={<CloseIcon />}
                            className="bg-transparent"
                            onClick={async () => {
                              setIsLoading(true);
                              deleteProductFromCart(cartProduct.product.id);
                              setCart(await getCart());
                              setIsLoading(false);
                            }}
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between">
                          <div className="flex flex-row gap-2 items-center">
                            <Button
                              className="w-unit-6 min-w-unit-6 h-unit-6"
                              isIconOnly
                              radius="sm"
                              color="default"
                              startContent={<MinusIcon />}
                              onClick={async () => {
                                setIsLoading(true);
                                updateCartProduct(cartProduct.product.id, cartProduct.quantity - 1);
                                setCart(await getCart());
                                setIsLoading(false);
                              }}
                            />
                            <span className="font-bold flex items-center justify-center w-4">
                              {cartProduct.quantity}
                            </span>
                            <Button
                              className="w-unit-6 min-w-unit-6 h-unit-6"
                              isIconOnly
                              radius="sm"
                              color="default"
                              startContent={<PlusIcon />}
                              onClick={async () => {
                                setIsLoading(true);
                                updateCartProduct(cartProduct.product.id, cartProduct.quantity + 1);
                                setCart(await getCart());
                                setIsLoading(false);
                              }}
                            />
                          </div>
                          <p className="font-semibold text-[16px] text-gray-700">
                            {cartProduct.product.price * cartProduct.quantity} ₽
                          </p>
                        </div>
                      </div>
                    </ListboxItem>
                  ))}
                </Listbox>
              )}
            </div>
            <div className="flex flex-col w-full gap-[1em] px-4">
              <span className="ml-[10px] tracking-[1px]">
                Итого: <b>{cartData.total_price} ₽</b>
              </span>
              <Button size="lg" color="primary" onClick={() => openNewOrderModal()}>
                Продолжить
              </Button>
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default Cart;
