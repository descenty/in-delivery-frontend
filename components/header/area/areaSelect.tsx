"use client";

import { Link, useDisclosure } from "@nextui-org/react";
import AreaModal from "@/components/header/area/areaModal";
import EditIcon from "@/components/icons/editIcon";

const AreaSelect = ({ areas }: { areas: AreaDTO[] | undefined }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <AreaModal areas={areas} isOpen={isOpen} onOpenChange={onOpenChange} />
      <Link color="foreground" className="cursor-pointer flex flex-row gap-4" onPress={onOpen}>
        Москва, ул. Гурьянова 34
        <div className="mb-[2px]">
          <EditIcon />
        </div>
      </Link>
    </>
  );
};

export default AreaSelect;
