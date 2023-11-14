import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  VacancyExperience,
  VacancyExperienceMap,
  VacancyShortDTO,
} from "@/schemas/vacancyDTO";

const getSalaryText = (minSalary?: number, maxSalary?: number) => {
  const minSalaryText = minSalary?.toLocaleString();
  const maxSalaryText = maxSalary?.toLocaleString();
  if (!minSalary && !maxSalary) return null;
  if (minSalary && !maxSalary) return `От ${minSalaryText} ₽`;
  if (!minSalary && maxSalary) return `До ${maxSalaryText} ₽`;
  return `${minSalaryText} - ${maxSalaryText} ₽`;
};

const VacancyCard = ({
  vacancy,
  extended = true,
}: {
  vacancy: VacancyShortDTO;
  extended?: boolean;
}) => {
  const salaryText = getSalaryText(vacancy.minSalary, vacancy.maxSalary);
  return (
    <Card>
      <CardHeader className="flex flex-wrap gap-x-24 gap-y-4 pt-4">
        <div className="pl-3 flex flex-col">
          <Link color="foreground" href={`/vacancies/${vacancy.id}`}>
            <h3 className="max-sm:text-large text-xl font-semibold">
              {vacancy.title}
            </h3>
          </Link>
          <span className="text-sm text-default-500">
            {VacancyExperienceMap[vacancy.experience]}
          </span>
          <h2 className="max-sm:text-xl text-2xl font-semibold mt-1">
            {salaryText}
          </h2>
        </div>
        <div className="flex items-center gap-3 justify-end px-3">
          <Link href={`/companies/${vacancy.company.id}`} color="foreground">
            <Image
              alt="nextui logo"
              width={48}
              height={48}
              radius="sm"
              src={
                vacancy.company.logo ??
                "https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              }
            />
          </Link>
          <div className="flex flex-col">
            <Link href={`/companies/${vacancy.company.id}`} color="foreground">
              <p className="max-sm:text-large text-xl">
                {vacancy.company.name}
              </p>
            </Link>
            {/* TODO open modal window with area on map */}
            <Link className="cursor-pointer" onClick={() => {}}>
              <p className="text-sm text-default-500">{vacancy.area.name}</p>
            </Link>
          </div>
        </div>
      </CardHeader>
      {extended && (
        <>
          <Divider />
          <CardBody className="pl-6 max-sm:text-sm">
            <p>{vacancy.description}</p>
          </CardBody>
        </>
      )}
      <Divider />
      <CardFooter className="p-4 pl-6">
        {/* TODO open modal window on click */}
        <Button color="primary">Откликнуться</Button>
      </CardFooter>
    </Card>
  );
};

export default VacancyCard;
