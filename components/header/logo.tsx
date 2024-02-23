import { Card } from "@nextui-org/react";
import Link from "next/link";

const Logo = () => (
  <Card className="w-[16vw] min-w-[240px] h-24 rounded-t-none rounded-l-none flex flex-row items-center px-8 font-bold tracking-wide text-2xl text-primary">
    <Link href="/">InDelivery</Link>
  </Card>
);

export default Logo;
