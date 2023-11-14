import { UUID } from "crypto";

export type Category = {
  id: UUID;
  title: string;
  image: string;
};
