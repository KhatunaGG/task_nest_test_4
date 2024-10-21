import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

@InputType()
export class UpdatePostInput {
  @Field()
  @IsMongoId()
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  content?: string;
}
