import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceProviderProfileServiceBase } from "./base/serviceProviderProfile.service.base";

@Injectable()
export class ServiceProviderProfileService extends ServiceProviderProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
