import { Select, SelectItem } from "@nextui-org/react";

const RestaurantSelect = () => (
  <Select
    label="Адрес доставки"
    classNames={{
      value: "text-lg",
      description: "text-sm",
    }}
    className="w-[600px]"
  >
    {["г. Москва, проспект Вернадского, д. 86, стр. 1"].map((address) => (
      <SelectItem key={address} value={address}>
        {address}
      </SelectItem>
    ))}
  </Select>
);

export default RestaurantSelect;
