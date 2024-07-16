import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type ReviewCreateInput = {
  rating?: number | null;
  comment?: string | null;
  reviewer?: string | null;
  serviceProvider?: string | null;
  task?: TaskWhereUniqueInput | null;
};
