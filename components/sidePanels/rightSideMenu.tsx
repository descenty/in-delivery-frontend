"use client";

import { Card, Listbox, ListboxSection } from "@nextui-org/react";
import Cart from "../cart/cart";
import { useStore } from "effector-react";
import { $cart } from "@/stores/cartStore";

const RightSideMenu = ({ className }: { className?: string }) => {
  const cartData = useStore($cart);
  return (
    <Card className={`px-1 py-2 pointer-events-auto shadow-none ${className}`}>
      <Cart cartData={cartData} />
    </Card>
  );
};

export default RightSideMenu;
