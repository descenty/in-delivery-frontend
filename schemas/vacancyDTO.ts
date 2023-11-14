import { UUID } from "crypto";

export enum VacancyExperience {
  NO_EXPERIENCE = 0,
  FROM_1_TO_3 = 1,
  FROM_3_TO_6 = 2,
  MORE_THAN_6 = 3,
}

export const VacancyExperienceMap: Record<VacancyExperience, string> = {
  [VacancyExperience.NO_EXPERIENCE]: "Нет опыта",
  [VacancyExperience.FROM_1_TO_3]: "От 1 года до 3 лет",
  [VacancyExperience.FROM_3_TO_6]: "От 3 до 6 лет",
  [VacancyExperience.MORE_THAN_6]: "Более 6 лет",
};

export interface VacancyShortDTO {
  id: UUID;
  title: string;
  description: string;
  experience: VacancyExperience;
  minSalary?: number;
  maxSalary?: number;
  area: {
    id: number;
    name: string;
  };
  company: CompanyDTO;
  publishedAt: Date;
}

export interface VacancyDTO extends VacancyShortDTO {
  isPublished: boolean;
  isInArchive: boolean;
  archivedAt: Date | null;
}
