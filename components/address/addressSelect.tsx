import { openNewAddressPanel } from "@/stores/newAddressPanelStore";
import { Select, SelectItem } from "@nextui-org/react";

const AddressSelect = ({ className }: { className: string }) => (
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
    <SelectItem key="new-address" value="new-address" onClick={() => openNewAddressPanel()}>
      <span className="font-semibold">Добавить новый адрес</span>
    </SelectItem>
  </Select>
);

export default AddressSelect;
