import { Module } from "@nestjs/common";
import { ServiceProviderProfileModuleBase } from "./base/serviceProviderProfile.module.base";
import { ServiceProviderProfileService } from "./serviceProviderProfile.service";
import { ServiceProviderProfileController } from "./serviceProviderProfile.controller";
import { ServiceProviderProfileResolver } from "./serviceProviderProfile.resolver";

@Module({
  imports: [ServiceProviderProfileModuleBase],
  controllers: [ServiceProviderProfileController],
  providers: [ServiceProviderProfileService, ServiceProviderProfileResolver],
  exports: [ServiceProviderProfileService],
})
export class ServiceProviderProfileModule {}
