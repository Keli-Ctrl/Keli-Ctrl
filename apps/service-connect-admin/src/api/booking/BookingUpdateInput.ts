import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type BookingUpdateInput = {
  status?: "Option1" | null;
  scheduledDate?: Date | null;
  task?: TaskWhereUniqueInput | null;
};
