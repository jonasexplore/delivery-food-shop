import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CompanyStatus } from '../entities/company.entity';
import { CreateCompanyInput } from './create-company.input';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
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
