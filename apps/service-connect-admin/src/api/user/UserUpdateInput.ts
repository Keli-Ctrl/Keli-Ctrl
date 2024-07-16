import { InputJsonValue } from "../../types";
import { ServiceProviderProfileUpdateManyWithoutUsersInput } from "./ServiceProviderProfileUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  serviceProviderProfiles?: ServiceProviderProfileUpdateManyWithoutUsersInput;
};
