import { ServiceProviderProfileWhereInput } from "./ServiceProviderProfileWhereInput";
import { ServiceProviderProfileOrderByInput } from "./ServiceProviderProfileOrderByInput";

export type ServiceProviderProfileFindManyArgs = {
  where?: ServiceProviderProfileWhereInput;
  orderBy?: Array<ServiceProviderProfileOrderByInput>;
  skip?: number;
  take?: number;
};
