"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Skeleton,
} from "@nextui-org/react";
import { Suspense, SuspenseList } from "react";

const Areas = ({ areas }: { areas: AreaDTO[] | undefined }) => {
  if (!areas) {
    return (
      <>
        {Array.from({ length: 16 }, (_, i) => (
          <Skeleton key={i} className="w-full h-4 rounded-md" />
        ))}
      </>
    );
  }
  return areas.map((area) => <span key={area.id}>{area.name}</span>);
};

const AreaModal = ({
  areas,
  isOpen,
  onOpenChange,
}: {
  areas: AreaDTO[] | undefined;
  isOpen: boolean;
  onOpenChange: () => void;
}) => (
  <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
      <ModalHeader className="flex flex-col gap-1">Выбор региона</ModalHeader>
      <ModalBody className="relative grid grid-cols-4 gap-4 pb-5 w-full">
        <Areas areas={areas} />
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default AreaModal;
