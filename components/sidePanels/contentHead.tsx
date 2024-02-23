"use client";
import { get_category } from "@/services/category_service";
import { Card, Spinner } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Search from "../header/search";

const ContentHead = () => {
  const pathname = usePathname();
  const [cardTitle, setCardTitle] = useState<string>("");
  useEffect(() => {
    if (pathname === "/") setCardTitle("Главная");
    else if (pathname.includes("/catalog/"))
      get_category(pathname.split("/")[2]).then((category) => setCardTitle(category.title));
  }, [pathname]);
  return (
    <Card className="h-[88px] shadow-none col-span-2 max-lg:col-span-4 px-8 border-b-1 grid grid-cols-2 items-center pointer-events-auto overflow-visible">
      {!cardTitle ? <Spinner className="pl-4" /> : <h1 className="text-2xl font-semibold">{cardTitle}</h1>}
      <Search />
    </Card>
  );
};

export default ContentHead;
