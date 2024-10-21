import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostObjectType {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => ID)
  _id: string;
}
