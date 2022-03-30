import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateCompanyInput } from './create-company.input';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
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
