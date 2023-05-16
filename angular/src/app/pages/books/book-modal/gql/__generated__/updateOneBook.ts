import { getOneBook, getOneBook_getOneBook } from "./getOneBook";

export interface UpdateOneBookInput {
  id: string;
  name: string;
  author: string;
  description: string | null;
}

export interface UpdateOneBookResponse {
  updateBook: getOneBook_getOneBook;
}
