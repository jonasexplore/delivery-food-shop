import { Field, InputType } from '@nestjs/graphql';
import { CompanyStatus } from '../entities/company.entity';

@InputType()
export class CreateCompanyInput {
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
