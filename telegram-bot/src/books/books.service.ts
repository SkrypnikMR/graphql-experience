import { Inject, Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';
import { GET_ALL_BOOKS, GET_ONE_BOOK } from '../gql/queries';
import { BookDto } from './dto/book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { CREATE_BOOK, REMOVE_BOOK, UPDATE_BOOK } from '../gql/mutations';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @Inject('GraphQLClient') private readonly graphQLClient: GraphQLClient,
  ) {}

  async getAllBooks() {
    return this.graphQLClient.request<{ getAllBooks: BookDto[] }>(
      GET_ALL_BOOKS,
    );
  }

  async getOneBook(id: string) {
    return this.graphQLClient.request<{ getOneBook: BookDto }>(GET_ONE_BOOK, {
      id,
    });
  }

  async createBook(createBookDto: CreateBookDto) {
    return this.graphQLClient.request<{ createBook: BookDto }>(CREATE_BOOK, {
      book: createBookDto,
    });
  }

  async removeBook(id: string) {
    return this.graphQLClient.request<{ removeBook: number }>(REMOVE_BOOK, {
      id,
    });
  }

  async updateBook(book: UpdateBookDto) {
    return this.graphQLClient.request<{ updateBook: BookDto }>(UPDATE_BOOK, {
      book,
    });
  }
}
