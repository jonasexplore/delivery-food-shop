import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCompanyInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  shippingTime: string;

  @Field(() => String)
  status: string;

  @Field(() => String)
  addressId: string;
}
