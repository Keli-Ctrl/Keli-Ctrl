import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  scheduledDate?: DateTimeNullableFilter;
  task?: TaskWhereUniqueInput;
};
