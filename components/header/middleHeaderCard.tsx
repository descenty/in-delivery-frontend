import { Card } from "@nextui-org/react";
import RestaurantSelect from "./restaurantSelect";

const MiddleHeaderCard = () => (
  <Card className="w-full bg-white rounded-t-none h-24 px-8 flex flex-row items-center gap-10">
    <RestaurantSelect />
    <p>Бесплатная доставка от 600 ₽</p>
  </Card>
);

export default MiddleHeaderCard;
