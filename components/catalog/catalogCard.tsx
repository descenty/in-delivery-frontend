import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { VacancyExperience, VacancyExperienceMap, VacancyShortDTO } from "@/schemas/vacancyDTO";
import { CardContent } from "@mui/material";
import { Category } from "@/schemas/categoryDTO";

const CatalogCard = ({ category, onClick }: { category: Category; onClick?: () => void }) => (
  <Card
    onClick={onClick}
    className="w-full aspect-square flex flex-col justify-between p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer"
  >
    <span className="absolute max-sm:text-xs max-md:text-sm font-[500] tracking-tighter w-[80%] z-10">
      {category.title}
    </span>
    <Image
      className="w-[25vw] mt-[2vw] ml-[2vw] aspect-square object-cover z-0"
      src={category.image}
      alt="product image"
    />
  </Card>
);

export default CatalogCard;
