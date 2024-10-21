import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DiscountInputType {
  @Field()
  status: boolean;

  @Field()
  discountedPrice: number;
}

@InputType()
export class CreateProductInputType {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  inStock: number;

  @Field()
  isExp: boolean;

  @Field()
  discount: DiscountInputType;
}
