"use client";
import VacancyCard from "@/components/vacancies/vacancyCard";
import VacanciesFilters from "@/components/vacancies/filters/vacanciesFilters";
import { VacancyExperience, VacancyShortDTO } from "@/schemas/vacancyDTO";
import { cityIn } from "lvovich";
import { Pagination } from "@nextui-org/pagination";
import { useState } from "react";
import { UUID } from "crypto";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Tooltip } from "@nextui-org/tooltip";
import { ShortIcon } from "@/components/icons/shortIcon";
import { ExtendedIcon } from "@/components/icons/extendedIcon";
import { Card } from "@nextui-org/card";
import VacanciesFiltersModal from "@/components/vacancies/filters/vacanciesFiltersModal";
import VacanciesHeader from "@/components/vacancies/vacanciesHeader";

const Vacancies = () => {
  // const vacancies = await fetchVacancies();
  const area = cityIn("Москва");
  const vacancy: VacancyShortDTO = {
    id: "1ac2b3d4-5e6f-7g8h-9i0j-1k2l3m4n5o6p" as UUID,
    title: "Веб-разработчик",
    description:
      "Мы занимаемся разработкой сайтов и приложений. Нам нужен веб-разработчик с опытом работы от 1 года, который сможет взять на себя реализацию проектов с нуля. Используем Next.js, React, TypeScript, Node.js, MongoDB, PostgreSQL, Docker.",
    experience: VacancyExperience.FROM_1_TO_3,
    minSalary: 50000,
    maxSalary: 90000,
    area: {
      id: 14,
      name: "Москва, Ленинский проспект",
    },
    company: {
      id: 217,
      name: "Сбер",
      logo: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
    },
    publishedAt: new Date(),
  };
  const [page, setPage] = useState<number>(1);
  const [extendedVacancyCard, setExtendedVacancyCard] = useState<boolean>(true);
  console.log(extendedVacancyCard);
  return (
    <div className="flex flex-row gap-6 w-full max-w-[1200px] p-5 items-center justify-center">
      <div className="flex flex-row gap-6 w-full">
        <VacanciesFilters className="max-w-[320px] max-[770px]:hidden" />
        <div className="flex flex-col gap-6 w-full">
          <VacanciesHeader
            area={area}
            extendedVacancyCard={extendedVacancyCard}
            setExtendedVacancyCard={setExtendedVacancyCard}
          />
          {Array.from({ length: 3 }, (_, i) => (
            <VacancyCard
              extended={extendedVacancyCard}
              vacancy={vacancy}
              key={i}
            />
          ))}
          <Pagination onChange={setPage} page={page} total={10} />
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
