"use client";
import { Card } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { useMemo, useState } from "react";
import AreaFilter from "./areasFilter";
import ExperienceFilter from "./experienceFilter";
import SalaryFilter from "./salaryFilter";
import {
  Accordion,
  AccordionItem,
  AccordionProps,
  ScrollShadow,
} from "@nextui-org/react";

const VacanciesFilters = ({
  className,
  expanded = true,
  multipleSelection = true,
  variant = "shadow",
}: {
  className?: string;
  expanded?: boolean;
  multipleSelection?: boolean;
  variant?: AccordionProps["variant"];
}) => {
  const [areas, setAreas] = useState<string[]>(["Москва"]);
  const [experience, setExperience] = useState<string>("0");
  const [salary, setSalary] = useState<string>("0");
  console.log({
    areas,
    experience,
    salary,
  });
  return (
    <Accordion
      variant={variant}
      selectionMode={multipleSelection ? "multiple" : "single"}
      defaultExpandedKeys={
        expanded ? ["area", "experience", "salary"] : ["area"]
      }
      className={`gap-6 h-fit ${className}`}
      itemClasses={{
        heading: "px-3 py-[2px] font-semibold",
        content: "flex flex-col gap-4 px-3 pb-6",
      }}
    >
      <AccordionItem key="area" title="Регион">
        <AreaFilter selectedAreas={areas} setSelectedAreas={setAreas} />
      </AccordionItem>
      <AccordionItem key="experience" title="Опыт работы">
        <ExperienceFilter
          experience={experience}
          setExperience={setExperience}
        />
      </AccordionItem>
      <AccordionItem key="salary" title="Уровень дохода">
        <SalaryFilter salary={salary} setSalary={setSalary} />
      </AccordionItem>
    </Accordion>
  );
};

export default VacanciesFilters;
