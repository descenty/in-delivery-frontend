"use client";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Card, CardHeader, Input, Modal, ModalHeader } from "@nextui-org/react";
import EmptyCartIcon from "../icons/emptyCartIcon";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "../icons/closeIcon";
import PlusIcon from "../icons/plusIcon";
import MinusIcon from "../icons/minusIcon";
import { useStore, useUnit } from "effector-react";
import { $cart, $isCartOpened, closeCart, openCart, pageMounted } from "@/stores/cartStore";
import Cart from "./cart";

interface IConfiguration {
  title: string;
  price: number;
}

interface ICartGood {
  id: number;
  title: string;
  image: string | StaticImageData;
  imagePadding?: number;
  configuration: IConfiguration;
  quantity: number;
}

interface IPromoCode {
  code: string;
  description: string;
  discount: number;
}

export interface ICartProps {
  // cartGoods: ICartGood[];
  total: number;
  totalWithDiscount: number;
  promoCode?: IPromoCode;
  promoCodeError?: string;
  maxQuantity?: number;
  notLoaded?: boolean;
  onSubmit?: () => void;
  onClose?: () => void;
  addToCart: (goodId: number, configurationTitle: string) => void;
  removeFromCart: (goodId: number, configurationTitle: string) => void;
  setPromoCode: (promoCode?: string) => void;
}

const CartWrapper = () => {
  const isCartOpened = useStore($isCartOpened);
  const cartData = useStore($cart);
  // const [promoCodeInput, setPromoCodeInput] = useState(cart.promoCode?.code);
  const handlePageMount = useUnit(pageMounted);

  useEffect(() => {
    handlePageMount();
  }, [handlePageMount]);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isCartOpened}
      onOpen={() => openCart()}
      onClose={() => closeCart()}
      swipeAreaWidth={30}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Cart cartData={cartData} />
    </SwipeableDrawer>
  );
};

export default CartWrapper;
