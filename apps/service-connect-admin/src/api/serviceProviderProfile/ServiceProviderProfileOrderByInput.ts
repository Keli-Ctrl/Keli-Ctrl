import { SortOrder } from "../../util/SortOrder";

export type ServiceProviderProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reviews?: SortOrder;
  skills?: SortOrder;
  availability?: SortOrder;
  rates?: SortOrder;
  userId?: SortOrder;
};
