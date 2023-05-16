import { Module } from '@nestjs/common';
import { GraphQLClientProvider } from './graphql-client.provider';

@Module({
  providers: [GraphQLClientProvider],
  exports: [GraphQLClientProvider],
})
export class GraphQLClientModule {}
