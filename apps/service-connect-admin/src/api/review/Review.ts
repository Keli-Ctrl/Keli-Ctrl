import { Task } from "../task/Task";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comment: string | null;
  reviewer: string | null;
  serviceProvider: string | null;
  task?: Task | null;
};
