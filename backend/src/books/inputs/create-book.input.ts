import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  name: string;

  @Field()
  author: string;

  @Field({ nullable: true })
  description: string;
}
