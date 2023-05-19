import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import * as cors from 'cors';

import { typeormFactory } from './typeorm.factory';
import { BooksModule } from './books/books.module';
import { RequestLoggingMiddleware } from './request-logging/request-logging.middleware';
import { RequestLoggingModule } from './request-logging/request-logging.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '../.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeormFactory,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gpl',
      sortSchema: true,
      playground: true,
      driver: ApolloDriver,
      autoTransformHttpErrors: true,
    }),
    BooksModule,
    RequestLoggingModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors(), RequestLoggingMiddleware).forRoutes('*');
  }
}
