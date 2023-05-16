import { BookDto } from '../dto/book.dto';

export const getBookStringTemplate = ({
  id,
  name,
  author,
  description,
  updatedAt,
  createdAt,
}: BookDto) =>
  `ID: ${id}\n name: ${name}\n author: ${author}\n created at: ${createdAt}\n updatedAt: ${updatedAt}\n description: ${
    description ?? 'empty'
  }`;
