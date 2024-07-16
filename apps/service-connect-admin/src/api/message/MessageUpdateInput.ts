import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  sentAt?: Date | null;
  sender?: string | null;
  receiver?: string | null;
  task?: TaskWhereUniqueInput | null;
};
