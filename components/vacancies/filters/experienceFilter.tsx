"use client";
import { useState } from "react";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { VacancyExperience, VacancyExperienceMap } from "@/schemas/vacancyDTO";

const ExperienceFilter = ({
  experience,
  setExperience,
}: {
  experience: string;
  setExperience: (value: string) => void;
}) => {
  return (
    <>
      <RadioGroup
        defaultValue={VacancyExperience.NO_EXPERIENCE.toString()}
        value={experience}
        onValueChange={setExperience}
      >
        {Object.entries(VacancyExperienceMap).map(([key, value]) => (
          <Radio key={key} value={key} className="mt-[-4px]">
            {value}
          </Radio>
        ))}
      </RadioGroup>
    </>
  );
};

export default ExperienceFilter;
