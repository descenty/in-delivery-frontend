import HeaderNavigation from "@/components/header/headerNavigation";
import { fetchAPI } from "@/utils/fetchAPI";
import { SearchIcon } from "../icons/searchIcon";
import { Input } from "@nextui-org/react";
import Search from "./search";

const Header = async () => {
  const areas = await fetchAPI<AreaDTO[]>("/areas");
  return (
    <>
      <HeaderNavigation areas={areas} />
    </>
  );
};

export default Header;
