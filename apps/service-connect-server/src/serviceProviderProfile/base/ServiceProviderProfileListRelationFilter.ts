/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceProviderProfileWhereInput } from "./ServiceProviderProfileWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ServiceProviderProfileListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ServiceProviderProfileWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceProviderProfileWhereInput)
  @IsOptional()
  @Field(() => ServiceProviderProfileWhereInput, {
    nullable: true,
  })
  every?: ServiceProviderProfileWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServiceProviderProfileWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceProviderProfileWhereInput)
  @IsOptional()
  @Field(() => ServiceProviderProfileWhereInput, {
    nullable: true,
  })
  some?: ServiceProviderProfileWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServiceProviderProfileWhereInput,
  })
  @ValidateNested()
  @Type(() => ServiceProviderProfileWhereInput)
  @IsOptional()
  @Field(() => ServiceProviderProfileWhereInput, {
    nullable: true,
  })
  none?: ServiceProviderProfileWhereInput;
}
export { ServiceProviderProfileListRelationFilter as ServiceProviderProfileListRelationFilter };