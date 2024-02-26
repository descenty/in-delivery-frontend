import { getCustomerOrders } from "@/services/orderService";
import { openCustomerOrdersModal } from "@/stores/customerOrdersModalStore";
import { $customerOrders, setCustomerOrders } from "@/stores/customerOrdersStore";
import { openNewOrderModal } from "@/stores/newOrderModalStore";
import { Badge, Button, Card } from "@nextui-org/react";
import { useStore } from "effector-react";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ className }: { className?: string }) => {
  const customerOrders = useStore($customerOrders);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    getSession().then(async (session) => {
      if (session) {
        setLoggedIn(true);
        setCustomerOrders(await getCustomerOrders());
      }
    });
  }, []);
  return (
    <Card
      shadow="none"
      className={`rounded-t-none flex flex-row flex-wrap justify-between pr-6 items-center pl-8 max-md:pl-4 tracking-wide max-lg:text-xl text-2xl text-primary pointer-events-auto ${className}`}
    >
      <Link href="/"className="font-bold">in-delivery</Link>
      {loggedIn && (
        <Badge content={customerOrders.length} className={customerOrders.length == 0 ? "hidden" : ""} color="danger">
          <Button color="primary" onClick={() => openCustomerOrdersModal()}>
            Мои заказы
          </Button>
        </Badge>
      )}
    </Card>
  );
};

export default Logo;
