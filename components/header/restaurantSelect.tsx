import { Select, SelectItem } from "@nextui-org/react";

const RestaurantSelect = ({ className }: { className: string }) => (
  <Select
    label="Адрес доставки"
    className={className}
    classNames={{
      value: "text-base",
      description: "text-sm",
    }}
  >
    {["г. Москва, проспект Вернадского, д. 86, стр. 1"].map((address) => (
      <SelectItem key={address} value={address}>
        {address}
      </SelectItem>
    ))}
  </Select>
);

export default RestaurantSelect;
