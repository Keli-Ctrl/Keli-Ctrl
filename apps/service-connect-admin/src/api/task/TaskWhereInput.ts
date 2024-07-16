import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  title?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  status?: "Option1";
  serviceProvider?: StringNullableFilter;
  customer?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  messages?: MessageListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
