import { CreateBookDto } from '../../books/dto/create-book.dto';
import { ValidationResult } from './types';
import { UpdateBookDto } from '../../books/dto/update-book.dto';
import { BookDto } from '../../books/dto/book.dto';
export class InputValidation {
  static createValidation(input: CreateBookDto) {
    return Object.entries(input).reduce<ValidationResult>(
      (acc, [key, value], index, array) => {
        switch (key) {
          case 'name': {
            if (!value) {
              acc.errors.push('Name is Required!');
            }
            break;
          }

          case 'author': {
            if (!value) {
              acc.errors.push('Author is Required!');
            }
            break;
          }

          default: {
          }
        }
        if (index === array.length - 1 && !acc.errors.length) {
          acc.isValid = true;
        }

        return acc;
      },
      { isValid: false, errors: [] },
    );
  }

  static updateValidation(input: UpdateBookDto, books: BookDto[]) {
    return Object.entries(input).reduce<ValidationResult>(
      (acc, [key, value], index, array) => {
        switch (key) {
          case 'id': {
            if (!value) {
              acc.errors.push('ID is Required!');
            }

            const isExists = books.some(({ id }) => id === value);

            if (!isExists) {
              acc.errors.push('No book with this ID!');
            }
            break;
          }
          case 'name': {
            if (!value) {
              acc.errors.push('Name is Required!');
            }
            break;
          }

          case 'author': {
            if (!value) {
              acc.errors.push('Author is Required!');
            }
            break;
          }

          default: {
          }
        }
        if (index === array.length - 1 && !acc.errors.length) {
          acc.isValid = true;
        }

        return acc;
      },
      { isValid: false, errors: [] },
    );
  }
}
