import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type ServiceProviderProfile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reviews: JsonValue;
  skills: string | null;
  availability: JsonValue;
  rates: number | null;
  user?: User | null;
};
