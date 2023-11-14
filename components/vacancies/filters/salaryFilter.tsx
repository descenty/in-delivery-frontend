"use client";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Input } from "@nextui-org/input";
import { useRef, useState } from "react";

const salaries = [
  {
    value: 0,
    label: "Не имеет значения",
  },
  ...[70000, 140000, 210000, 280000, 350000].map((value) => ({
    value,
    label: `от ${value.toLocaleString()} ₽`,
  })),
];

const SalaryFilter = ({
  salary,
  setSalary,
}: {
  salary: string;
  setSalary: (value: string) => void;
}) => {
  const [selfSalary, setSelfSalary] = useState<string>("");
  return (
    <>
      <RadioGroup
        defaultValue={salaries[0].value.toString()}
        value={salary}
        onValueChange={setSalary}
      >
        {salaries.map(({ value, label }) => (
          <Radio key={value} value={value.toString()} className="mt-[-4px]">
            {label}
          </Radio>
        ))}
        <Radio value={selfSalary} className="mt-[-4px]">
          Своя зарплата
        </Radio>
        <Input
          isDisabled={salary !== selfSalary}
          placeholder="70 000"
          type="number"
          startContent="от"
          value={selfSalary}
          onValueChange={(value) => {
            setSelfSalary(value);
            setSalary(value);
          }}
        />
      </RadioGroup>
    </>
  );
};

export default SalaryFilter;
