"use client";

import { Button } from "@nextui-org/react";
import CartIcon from "../icons/cartIcon";
import { openCart } from "@/stores/cartStore";

const CartButton = () => (
  <Button isIconOnly color="primary" className="w-12 h-12" onClick={() => openCart()}>
    <CartIcon />
  </Button>
);

export default CartButton;
