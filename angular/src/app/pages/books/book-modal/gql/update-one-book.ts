import { gql } from "apollo-angular";
import {  UpdateOneBookInput, UpdateOneBookResponse } from "./__generated__/updateOneBook";
import { getOneBook_getOneBook } from "./__generated__/getOneBook";


export const UPDATE_BOOK = gql<UpdateOneBookResponse, {book: UpdateOneBookInput}>`
  mutation UpdateBook($book: UpdateBookInput!){
    updateBook(updateBook: $book){
      id
      name
      description
      author
      createdAt
      updatedAt
    }
  }
`;
