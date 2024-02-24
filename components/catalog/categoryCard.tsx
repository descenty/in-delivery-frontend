import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { VacancyExperience, VacancyExperienceMap, VacancyShortDTO } from "@/schemas/vacancyDTO";
import { CardContent } from "@mui/material";
import { Category } from "@/schemas/category";
import Image from "next/image";
import { Badge } from "@nextui-org/react";

const CategoryCard = ({ category, onClick }: { category: Category; onClick?: () => void }) => {
  return (
    <Badge color="danger" className="z-0" content={category.product_count}>
      <Card
        onClick={onClick}
        className="w-full shadow-none relative aspect-square flex flex-col justify-between p-4 bg-gray-100 hover:bg-gray-200 cursor-pointer"
      >
        <div className="absolute flex flex-col gap-1 max-sm:text-xs max-md:text-sm font-[500] tracking-tighter w-[80%]">
          <span>{category.title}</span>
        </div>
        <Image
          className="w-[25vw] mt-[2vw] ml-[2vw] aspect-square object-cover z-0"
          src={category.image}
          alt="product image"
          width={256}
          height={256}
        />
      </Card>
    </Badge>
  );
};

export default CategoryCard;
