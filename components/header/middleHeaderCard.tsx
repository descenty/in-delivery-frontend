import { Card } from "@nextui-org/react";
import RestaurantSelect from "./restaurantSelect";

const MiddleHeaderCard = ({ className }: { className?: string }) => (
  <Card
    shadow="none"
    className={`w-full bg-white rounded-t-none h-24 px-8 grid grid-cols-5 items-center gap-10 pointer-events-auto ${className}`}
  >
    <RestaurantSelect className="col-span-3" />
    <div className="flex flex-col col-span-2">
      <p className="text-green-500 font-bold tracking-widest text-sm">9:00 - 22:00</p>
      <p>
        Бесплатная доставка от <span className="font-bold tracking-widest text-primary">600 ₽</span>
      </p>
    </div>
  </Card>
);

export default MiddleHeaderCard;
