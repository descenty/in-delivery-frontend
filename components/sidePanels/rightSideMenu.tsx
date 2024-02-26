"use client";

import { Card, Listbox, ListboxSection, Spinner } from "@nextui-org/react";
import Cart from "../cart/cart";
import { useStore } from "effector-react";
import { $cart, setCart } from "@/stores/cartStore";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { getCart } from "@/services/cartService";

const RightSideMenu = ({ className }: { className?: string }) => {
  const cartData = useStore($cart);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        setUserLoggedIn(true);
        getCart().then((cart) => setCart(cart));
      }
    });
  }, []);
  if (!userLoggedIn)
    return (
      <Card
        className={`px-7 py-2 text-center tracking-wide text-default-500 flex flex-row justify-center items-center text-lg pointer-events-auto shadow-none ${className}`}
      >
        <p>Для возможности заказа необходимо войти в аккаунт.</p>
      </Card>
    );
  if (userLoggedIn && cartData.total_price == -1) return <Spinner />;
  return (
    <Card className={`px-1 py-2 pointer-events-auto shadow-none ${className}`}>
      <Cart cartData={cartData} />
    </Card>
  );
};

export default RightSideMenu;
