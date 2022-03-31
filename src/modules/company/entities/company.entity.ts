import { Field, ObjectType } from '@nestjs/graphql';

export enum CompanyStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

@ObjectType()
export class Company {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description?: string;

  @Field(() => String)
  shippingTime?: string;

  @Field(() => String)
  status?: CompanyStatus;

  @Field(() => String)
  street?: string;

  @Field(() => String)
  city?: string;

  @Field(() => String)
  country?: string;
}
