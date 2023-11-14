import { Card } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

const CompanyCard = ({ company }: { company: CompanyDTO }) => {
  return (
    <Link href={`/companies/${company.id}`} color="foreground">
      <Card className="flex flex-row items-center p-2.5 gap-4 max-w-[350px] w-full">
        <Image
          alt="nextui logo"
          width={48}
          height={48}
          radius="sm"
          src={
            company.logo ??
            "https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          }
        />
        <p className="max-sm:text-large text-xl">{company.name}</p>
      </Card>
    </Link>
  );
};

export default CompanyCard;
