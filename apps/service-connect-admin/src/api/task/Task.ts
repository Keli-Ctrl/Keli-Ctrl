import { Booking } from "../booking/Booking";
import { Message } from "../message/Message";
import { Review } from "../review/Review";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  title: string | null;
  dueDate: Date | null;
  status?: "Option1" | null;
  serviceProvider: string | null;
  customer: string | null;
  createdBy: string | null;
  bookings?: Array<Booking>;
  messages?: Array<Message>;
  reviews?: Array<Review>;
};
