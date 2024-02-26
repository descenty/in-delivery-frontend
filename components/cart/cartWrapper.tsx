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
import { $cart, $isCartOpened, appStarted, closeCart, openCart } from "@/stores/cartStore";
import Cart from "./cart";

const CartWrapper = () => {
  const isCartOpened = useStore($isCartOpened);
  const cartData = useStore($cart);
  // const [promoCodeInput, setPromoCodeInput] = useState(cart.promoCode?.code);
  const handleAppStarted = useUnit(appStarted);

  useEffect(() => {
    handleAppStarted();
  }, [handleAppStarted]);

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
