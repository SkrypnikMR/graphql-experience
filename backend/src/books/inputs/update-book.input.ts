import { ID, Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateBookInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  author: string;

  @Field({ nullable: true })
  description: string;
}
