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
import { Link } from "@nextui-org/link";
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

const HeaderNavigation = ({ areas }: { areas: AreaDTO[] | undefined }) => {
  const pathName = usePathname();
  const activeLink = navLinks.find((link) => link.href === pathName);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isBordered className="h-20" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenu>
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.href}>
            <Link color={link === activeLink ? "primary" : "foreground"} className="w-full" href={link.href} size="lg">
              {link.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent>
        <div className="sm:hidden grid grid-cols-3 w-full gap-12">
          <NavbarMenuToggle className="place-self-start" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          <Link href="/" className="font-bold text-xl place-self-center">
            доставка
          </Link>
          <AuthStatus />
        </div>
        <div className="hidden sm:flex px-4 w-full flex-row items-center justify-center max-md:justify-between max-md:gap-x-8 gap-x-12">
          <Link href="/" className="font-bold text-xl">
            доставка
          </Link>
          <NavbarItem>
            <AreaSelect areas={areas} />
          </NavbarItem>
          <CatalogButton />
          {/* {navLinks.map((link) => (
            <NavbarItem isActive={link === activeLink} key={link.href}>
              <Link href={link.href} color={link === activeLink ? "primary" : "foreground"}>
                {link.title}
              </Link>
            </NavbarItem>
          ))} */}
          <AuthStatus />
          <CartButton />
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderNavigation;
