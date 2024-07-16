import { ServiceProviderProfile as TServiceProviderProfile } from "../api/serviceProviderProfile/ServiceProviderProfile";

export const SERVICEPROVIDERPROFILE_TITLE_FIELD = "id";

export const ServiceProviderProfileTitle = (
  record: TServiceProviderProfile
): string => {
  return record.id?.toString() || String(record.id);
};
