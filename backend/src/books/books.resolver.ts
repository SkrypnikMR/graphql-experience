import { Resolver } from '@nestjs/graphql';
import { Mutation, Query, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { BookEntity } from './entities/books.entity';
import { CreateBookInput } from './inputs/create-book.input';
import { UpdateBookInput } from './inputs/update-book.input';

@Resolver()
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => BookEntity, { nullable: true })
  async getOneBook(@Args('id') id: string) {
    return this.booksService.getOneBook(id);
  }

  @Query(() => [BookEntity])
  async getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Mutation(() => BookEntity)
  async createBook(@Args('createBook') createBookInput: CreateBookInput) {
    return this.booksService.createBook(createBookInput);
  }

  @Mutation(() => BookEntity)
  async updateBook(@Args('updateBook') updateBookInput: UpdateBookInput) {
    return this.booksService.updateBook(updateBookInput);
  }

  @Mutation(() => Number)
  async removeBook(@Args('id') id: string) {
    return this.booksService.removeBook(id);
  }
}
