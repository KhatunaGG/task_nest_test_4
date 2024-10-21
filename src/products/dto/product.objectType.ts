import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DiscountObjectType {
  @Field()
  status: boolean;

  @Field()
  discountedPrice: number;
}


@ObjectType()
export class ProductObjectType {

    @Field()
    _id: string;

    @Field()
    name: string;

    @Field()
    price: number;

    @Field()
    inStock: number;

    @Field()
    isExp: boolean;

    @Field(() => DiscountObjectType) 
    discount: DiscountObjectType;
}