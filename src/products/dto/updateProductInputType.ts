

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
    @Field()
    // @IsMongoId()
   id?: string;

  @Field()
  name?: string;

  @Field()
  price?: number;

  @Field()
  inStock?: number;

  @Field()
  isExp?: boolean;

  @Field()
  discount?: UpdateInputType;
}