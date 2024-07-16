import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ServiceProviderProfileWhereInput = {
  id?: StringFilter;
  reviews?: JsonFilter;
  skills?: StringNullableFilter;
  availability?: JsonFilter;
  rates?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
