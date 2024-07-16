import * as graphql from "@nestjs/graphql";
import { ServiceProviderProfileResolverBase } from "./base/serviceProviderProfile.resolver.base";
import { ServiceProviderProfile } from "./base/ServiceProviderProfile";
import { ServiceProviderProfileService } from "./serviceProviderProfile.service";

@graphql.Resolver(() => ServiceProviderProfile)
export class ServiceProviderProfileResolver extends ServiceProviderProfileResolverBase {
  constructor(protected readonly service: ServiceProviderProfileService) {
    super(service);
  }
}
