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
    <Card className="max-xl:h-[150px] h-[88px] p-4 px-6 shadow-none gap-x-4 gap-y-2 row-span-2 col-span-2 max-lg:col-span-4 border-b-1 grid grid-cols-2 items-center pointer-events-auto overflow-visible">
      {!cardTitle ? (
        <Spinner className="pl-4" />
      ) : (
        <h1 className="text-2xl font-semibold max-xl:text-lg max-xl:col-span-2">{cardTitle}</h1>
      )}
      <Search className="max-xl:col-span-2" />
    </Card>
  );
};

export default ContentHead;
