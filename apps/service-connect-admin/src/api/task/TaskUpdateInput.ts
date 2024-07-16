import { BookingUpdateManyWithoutTasksInput } from "./BookingUpdateManyWithoutTasksInput";
import { MessageUpdateManyWithoutTasksInput } from "./MessageUpdateManyWithoutTasksInput";
import { ReviewUpdateManyWithoutTasksInput } from "./ReviewUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  description?: string | null;
  title?: string | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  serviceProvider?: string | null;
  customer?: string | null;
  createdBy?: string | null;
  bookings?: BookingUpdateManyWithoutTasksInput;
  messages?: MessageUpdateManyWithoutTasksInput;
  reviews?: ReviewUpdateManyWithoutTasksInput;
};
