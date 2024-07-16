import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceProviderProfileService } from "./serviceProviderProfile.service";
import { ServiceProviderProfileControllerBase } from "./base/serviceProviderProfile.controller.base";

@swagger.ApiTags("serviceProviderProfiles")
@common.Controller("serviceProviderProfiles")
export class ServiceProviderProfileController extends ServiceProviderProfileControllerBase {
  constructor(protected readonly service: ServiceProviderProfileService) {
    super(service);
  }
}
