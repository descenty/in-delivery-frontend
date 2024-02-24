import { Card } from "@nextui-org/react";
import AddressSelect from "../address/addressSelect";

const MiddleHeaderCard = ({ className }: { className?: string }) => (
  <Card
    shadow="none"
    className={`w-full bg-white rounded-t-none xl:h-32 px-8 max-sm:px-2 flex flex-col xl:items-center py-4 xl:grid xl:grid-cols-5 gap-x-10 gap-y-4 pointer-events-auto ${className}`}
  >
    <AddressSelect className="col-span-3" />
    <div className="flex flex-col col-span-2 max-xl:pl-4 max-[710px]:hidden">
      <p className="text-green-500 font-bold tracking-widest text-sm">9:00 - 22:00</p>
      <p>
        Бесплатная доставка от <span className="font-bold tracking-widest text-primary">600 ₽</span>
      </p>
    </div>
  </Card>
);

export default MiddleHeaderCard;
