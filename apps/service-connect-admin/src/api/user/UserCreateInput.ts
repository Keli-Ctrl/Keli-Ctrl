import { InputJsonValue } from "../../types";
import { ServiceProviderProfileCreateNestedManyWithoutUsersInput } from "./ServiceProviderProfileCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  serviceProviderProfiles?: ServiceProviderProfileCreateNestedManyWithoutUsersInput;
};
