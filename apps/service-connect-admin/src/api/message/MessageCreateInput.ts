import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  sentAt?: Date | null;
  sender?: string | null;
  receiver?: string | null;
  task?: TaskWhereUniqueInput | null;
};
