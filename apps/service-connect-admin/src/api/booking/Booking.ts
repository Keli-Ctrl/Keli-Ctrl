import { Task } from "../task/Task";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  scheduledDate: Date | null;
  task?: Task | null;
};
