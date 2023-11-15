import { Button } from "@nextui-org/react";
import CatalogIcon from "../icons/catalogIcon";

const CatalogButton = () => (
  <Button color="primary" className="text-md flex flex-row items-center h-12">
    <div className="mb-[2px]">
      <CatalogIcon />
    </div>
    <span className="max-md:hidden">Каталог</span>
  </Button>
);

export default CatalogButton;
