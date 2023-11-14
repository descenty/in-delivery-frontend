"use client";

import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import FilterIcon from "@/components/icons/filterIcon";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import VacanciesFilters from "@/components/vacancies/filters/vacanciesFilters";
import { useState } from "react";
import { ModalProps } from "@nextui-org/react";

const VacanciesFiltersModal = ({ className }: { className: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Tooltip content="Фильтры" placement="bottom">
        <Button className={className} onPress={onOpen}>
          <FilterIcon />
        </Button>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        placement="bottom"
        className="max-h-[90vh]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="pb-0">Фильтры</ModalHeader>
              <ModalBody className="p-2">
                <VacanciesFilters expanded={false} variant="light" />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default VacanciesFiltersModal;
