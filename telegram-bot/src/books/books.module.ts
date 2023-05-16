import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { GraphQLClientModule } from '../graphql-client/graphql-client.module';

@Module({
  imports: [GraphQLClientModule],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
