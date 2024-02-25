import { UUID } from "crypto";

export type Address = {
  name: string;
  latitude: string;
  longitude: string;
};

export type AddressDTO = {
  id: UUID;
  name: string;
  latitude: string;
  longitude: string;
};
