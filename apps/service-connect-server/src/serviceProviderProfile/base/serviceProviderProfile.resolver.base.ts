/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ServiceProviderProfile } from "./ServiceProviderProfile";
import { ServiceProviderProfileCountArgs } from "./ServiceProviderProfileCountArgs";
import { ServiceProviderProfileFindManyArgs } from "./ServiceProviderProfileFindManyArgs";
import { ServiceProviderProfileFindUniqueArgs } from "./ServiceProviderProfileFindUniqueArgs";
import { CreateServiceProviderProfileArgs } from "./CreateServiceProviderProfileArgs";
import { UpdateServiceProviderProfileArgs } from "./UpdateServiceProviderProfileArgs";
import { DeleteServiceProviderProfileArgs } from "./DeleteServiceProviderProfileArgs";
import { User } from "../../user/base/User";
import { ServiceProviderProfileService } from "../serviceProviderProfile.service";
@graphql.Resolver(() => ServiceProviderProfile)
export class ServiceProviderProfileResolverBase {
  constructor(protected readonly service: ServiceProviderProfileService) {}

  async _serviceProviderProfilesMeta(
    @graphql.Args() args: ServiceProviderProfileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ServiceProviderProfile])
  async serviceProviderProfiles(
    @graphql.Args() args: ServiceProviderProfileFindManyArgs
  ): Promise<ServiceProviderProfile[]> {
    return this.service.serviceProviderProfiles(args);
  }

  @graphql.Query(() => ServiceProviderProfile, { nullable: true })
  async serviceProviderProfile(
    @graphql.Args() args: ServiceProviderProfileFindUniqueArgs
  ): Promise<ServiceProviderProfile | null> {
    const result = await this.service.serviceProviderProfile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ServiceProviderProfile)
  async createServiceProviderProfile(
    @graphql.Args() args: CreateServiceProviderProfileArgs
  ): Promise<ServiceProviderProfile> {
    return await this.service.createServiceProviderProfile({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ServiceProviderProfile)
  async updateServiceProviderProfile(
    @graphql.Args() args: UpdateServiceProviderProfileArgs
  ): Promise<ServiceProviderProfile | null> {
    try {
      return await this.service.updateServiceProviderProfile({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ServiceProviderProfile)
  async deleteServiceProviderProfile(
    @graphql.Args() args: DeleteServiceProviderProfileArgs
  ): Promise<ServiceProviderProfile | null> {
    try {
      return await this.service.deleteServiceProviderProfile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(
    @graphql.Parent() parent: ServiceProviderProfile
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
