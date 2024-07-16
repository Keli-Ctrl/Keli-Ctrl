import { BookingCreateNestedManyWithoutTasksInput } from "./BookingCreateNestedManyWithoutTasksInput";
import { MessageCreateNestedManyWithoutTasksInput } from "./MessageCreateNestedManyWithoutTasksInput";
import { ReviewCreateNestedManyWithoutTasksInput } from "./ReviewCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  description?: string | null;
  title?: string | null;
  dueDate?: Date | null;
  status?: "Option1" | null;
  serviceProvider?: string | null;
  customer?: string | null;
  createdBy?: string | null;
  bookings?: BookingCreateNestedManyWithoutTasksInput;
  messages?: MessageCreateNestedManyWithoutTasksInput;
  reviews?: ReviewCreateNestedManyWithoutTasksInput;
};
