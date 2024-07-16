import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ServiceProviderProfileCreateInput = {
  reviews?: InputJsonValue;
  skills?: string | null;
  availability?: InputJsonValue;
  rates?: number | null;
  user?: UserWhereUniqueInput | null;
};
