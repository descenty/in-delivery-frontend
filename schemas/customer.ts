import { UUID } from "crypto";
import { AddressDTO } from "./address";

export type Customer = {
  id: UUID;
  delivery_address_id: UUID;
};
