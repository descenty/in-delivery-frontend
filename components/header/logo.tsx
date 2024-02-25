import { openCustomerOrdersModal } from "@/stores/customerOrdersModalStore";
import { openNewOrderModal } from "@/stores/newOrderModalStore";
import { Button, Card } from "@nextui-org/react";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => (
  <Card
    shadow="none"
    className={`rounded-t-none flex flex-row flex-wrap justify-between pr-6 items-center pl-8 max-md:pl-4 font-bold tracking-wide max-lg:text-xl text-2xl text-primary pointer-events-auto ${className}`}
  >
    <Link href="/">in-delivery</Link>
    <Button color="primary" onClick={() => openCustomerOrdersModal()}>
      Мои заказы
    </Button>
  </Card>
);

export default Logo;
