import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateInputType {
  @Field()
  status?: boolean;

  @Field()
  discountedPrice?: number;
}



@InputType()
export class UpdateProductInputType {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  inStock?: number;

  @Field({ nullable: true })
  isExp?: boolean;

  @Field(() => UpdateInputType, { nullable: true })
  discount?: UpdateInputType;
}
