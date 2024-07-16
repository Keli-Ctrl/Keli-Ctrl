import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
  sender?: StringNullableFilter;
  receiver?: StringNullableFilter;
  task?: TaskWhereUniqueInput;
};
