import { createFormat } from '../parse-formats/create-format';
import { CreateBookDto } from '../../books/dto/create-book.dto';
import { UpdateBookDto } from '../../books/dto/update-book.dto';
import { updateFormat } from '../parse-formats/update-format';

export class InputParser {
  static createParse(str: string) {
    return str.split(',').reduce<CreateBookDto>(
      (acc, current, index) => {
        const key = createFormat[index];

        if (key) acc[createFormat[index]] = current.trim();

        return acc;
      },
      { name: '', author: '', description: null },
    );
  }

  static updateParse(str: string) {
    return str.split(',').reduce<UpdateBookDto>(
      (acc, current, index) => {
        const key = updateFormat[index];

        if (key) acc[updateFormat[index]] = current.trim();

        return acc;
      },
      { id: '', name: '', author: '', description: null },
    );
  }
}
