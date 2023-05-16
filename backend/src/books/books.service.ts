import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/books.entity';
import { Repository } from 'typeorm';
import { CreateBookInput } from './inputs/create-book.input';
import { UpdateBookInput } from './inputs/update-book.input';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  async getOneBook(id: string): Promise<BookEntity> {
    return await this.bookRepository.findOne({ where: { id } });
  }

  async getAllBooks(): Promise<BookEntity[]> {
    return await this.bookRepository.find();
  }
  async createBook(bookInput: CreateBookInput): Promise<BookEntity> {
    return await this.bookRepository.save({ ...bookInput });
  }

  async removeBook(id: string): Promise<string> {
    await this.bookRepository.delete({ id });
    return id;
  }

  async updateBook(bookInput: UpdateBookInput): Promise<BookEntity> {
    await this.bookRepository.update({ id: bookInput.id }, { ...bookInput });
    return await this.getOneBook(bookInput.id);
  }
}
