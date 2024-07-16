import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  title?: SortOrder;
  dueDate?: SortOrder;
  status?: SortOrder;
  serviceProvider?: SortOrder;
  customer?: SortOrder;
  createdBy?: SortOrder;
};
