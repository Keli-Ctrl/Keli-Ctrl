import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ServiceProviderProfileListRelationFilter } from "../serviceProviderProfile/ServiceProviderProfileListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  serviceProviderProfiles?: ServiceProviderProfileListRelationFilter;
};
