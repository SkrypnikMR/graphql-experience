import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entities/books.entity';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
