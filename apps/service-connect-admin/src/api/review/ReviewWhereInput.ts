import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  rating?: FloatNullableFilter;
  comment?: StringNullableFilter;
  reviewer?: StringNullableFilter;
  serviceProvider?: StringNullableFilter;
  task?: TaskWhereUniqueInput;
};
