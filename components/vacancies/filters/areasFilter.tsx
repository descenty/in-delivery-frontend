"use client";
import { useState } from "react";
import { Input } from "@nextui-org/input";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { AccordionItem } from "@nextui-org/react";

const areas = [
  {
    id: 1,
    name: "Москва",
  },
  {
    id: 2,
    name: "Санкт-Петербург",
  },
  {
    id: 3,
    name: "Новосибирск",
  },
  {
    id: 4,
    name: "Екатеринбург",
  },
  {
    id: 5,
    name: "Нижний Новгород",
  },
];

const AreasFilter = ({
  selectedAreas,
  setSelectedAreas,
}: {
  selectedAreas: string[];
  setSelectedAreas: (value: string[]) => void;
}) => {
  const [areaSearch, setAreaSearch] = useState<string>("");
  return (
    <>
      <Input
        placeholder="Поиск региона"
        value={areaSearch}
        onValueChange={setAreaSearch}
      />
      <ScrollShadow size={22} className="px-1 min-h-[38px]">
        <CheckboxGroup
          defaultValue={[areas[0].name]}
          value={selectedAreas}
          onValueChange={setSelectedAreas}
        >
          {areas
            .filter(
              (area) =>
                selectedAreas.includes(area.name) ||
                area.name.toLowerCase().includes(areaSearch.toLowerCase())
            )
            .map((area) => (
              <Checkbox key={area.id} value={area.name} className="mt-[-4px]">
                {area.name}
              </Checkbox>
            ))}
        </CheckboxGroup>
      </ScrollShadow>
    </>
  );
};
export default AreasFilter;
