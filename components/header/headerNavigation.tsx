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
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" className="font-bold text-xl">
            доставка
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex flex-row items-center gap-12" justify="center">
        <Link href="/" className="font-bold text-xl">
          доставка
        </Link>
        <NavbarItem>
          <AreaSelect areas={areas} />
        </NavbarItem>
        <Button color="primary" className="text-md flex flex-row items-center">
          <div className="mb-[2px]">
            <CatalogIcon />
          </div>
          Каталог
        </Button>
        {navLinks.map((link) => (
          <NavbarItem isActive={link === activeLink} key={link.href}>
            <Link href={link.href} color={link === activeLink ? "primary" : "foreground"}>
              {link.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <AuthStatus />
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Вы вошли, как</p>
              <p className="font-semibold">Александр Быченков</p>
            </DropdownItem>
            <DropdownItem key="settings">Мои настройки</DropdownItem>
            <DropdownItem key="analytics">Аналитика</DropdownItem>
            <DropdownItem key="help_and_feedback">Помощь</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Выйти
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>
      <NavbarMenu>
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.href}>
            <Link color={link === activeLink ? "primary" : "foreground"} className="w-full" href={link.href} size="lg">
              {link.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default HeaderNavigation;
