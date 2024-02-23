"use client";
import { Avatar } from "@nextui-org/avatar";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import AreaSelect from "@/components/header/area/areaSelect";
import { SearchIcon } from "@/components/icons/searchIcon";
export const dynamic = "force-dynamic";
import AuthStatus from "@/components/header/authStatus";
import { usePathname } from "next/navigation";
import { AcmeLogo } from "../icons/acmeLogo";
import { useState } from "react";
import CatalogIcon from "../icons/catalogIcon";
import CartButton from "../cart/cartButton";
import CatalogButton from "../catalog/catalogButton";
import Link from "next/link";
import Search from "./search";
import Logo from "./logo";
import RestaurantSelect from "./restaurantSelect";
import MiddleHeaderCard from "./middleHeaderCard";
import UserHeaderCard from "./userHeaderCard";

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  {
    title: "Продавцам",
    href: "/vacancies",
  },
  {
    title: "Контакты",
    href: "/companies",
  },
];

const Header = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  const activeLink = navLinks.find((link) => link.href === pathName);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`grid grid-cols-4 w-full gap-4 rounded-xl z-20 ${className}`}>
      <Logo className="w-full" />
      <MiddleHeaderCard className="col-span-2" />
      <UserHeaderCard />
      {/* <div className="h-40 w-full flex flex-col justify-start py-4 bg-white">
        <div className="flex flex-col gap-6">
          <div className="hidden sm:flex px-4 w-full flex-row items-center justify-center max-md:justify-between max-md:gap-x-8 gap-x-12">
            <Link href="/" className="font-bold text-xl text-primary">
              InDelivery
            </Link>
            <Link href="/">
              <CatalogButton />
            </Link>
            <AuthStatus />
            <CartButton />
          </div>
        </div>
        <Search />
      </div> */}
    </div>
  );
};

export default Header;
