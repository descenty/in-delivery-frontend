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

const CompanyCreateModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="primary" variant="flat" className="w-fit" onPress={onOpen}>
        Создать компанию
      </Button>
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
              <ModalHeader className="pb-0">Новая компания</ModalHeader>
              <ModalBody className="p-2">
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CompanyCreateModal;
