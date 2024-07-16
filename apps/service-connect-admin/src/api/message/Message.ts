import { Task } from "../task/Task";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  sentAt: Date | null;
  sender: string | null;
  receiver: string | null;
  task?: Task | null;
};
