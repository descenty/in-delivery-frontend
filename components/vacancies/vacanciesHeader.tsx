"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Card } from "@nextui-org/card";
import { ExtendedIcon } from "@/components/icons/extendedIcon";
import { ShortIcon } from "@/components/icons/shortIcon";
import VacanciesFiltersModal from "./filters/vacanciesFiltersModal";
import { useCallback } from "react";
import { Link } from "@nextui-org/react";

const VacanciesHeader = ({
  area,
  extendedVacancyCard,
  setExtendedVacancyCard,
}: {
  area: string;
  extendedVacancyCard: boolean;
  setExtendedVacancyCard: (extended: boolean) => void;
}) => {
  const Options = useCallback(
    () => (
      <div className="flex flex-row gap-4">
        <VacanciesFiltersModal className="min-[770px]:hidden" />
        <Tabs
          aria-label="Options"
          selectedKey={extendedVacancyCard ? "extended" : "short"}
          onSelectionChange={(key) =>
            setExtendedVacancyCard(key === "extended")
          }
        >
          <Tab key="short" title={<ShortIcon />} />
          <Tab key="extended" title={<ExtendedIcon />} />
        </Tabs>
      </div>
    ),
    [extendedVacancyCard, setExtendedVacancyCard]
  );
  return (
    <>
      <div className="flex flex-row flex-wrap px-4 gap-x-6 gap-y-6 items-center justify-between">
        <div className="flex flex-row flex-wrap gap-2 gap-y-0">
          <h1 className="text-xl">Найдено</h1>
          <span className="text-xl">153 вакансии</span>
        </div>
        <Options />
      </div>
    </>
  );
};
export default VacanciesHeader;
