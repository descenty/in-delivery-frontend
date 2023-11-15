"use client";

import { Button } from "@nextui-org/react";
import CartIcon from "../icons/cartIcon";

const CartButton = () => (
  <Button
    isIconOnly
    color="primary"
    className="w-12 h-12"
    // onClick={() => signIn("keycloak")}
  >
    <CartIcon />
  </Button>
);

export default CartButton;
