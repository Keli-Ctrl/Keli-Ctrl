import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type BookingCreateInput = {
  status?: "Option1" | null;
  scheduledDate?: Date | null;
  task?: TaskWhereUniqueInput | null;
};
