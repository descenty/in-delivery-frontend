import HeaderNavigation from "@/components/header/headerNavigation";
import { fetchAPI } from "@/utils/fetchAPI";

const Header = async () => {
  const areas = await fetchAPI<AreaDTO[]>("/areas");
  return (
    <>
      <HeaderNavigation areas={areas} />
      {/* <Button >sdsd</Button> */}
    </>
  );
};

export default Header;
