import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => String)
  id: string;

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
