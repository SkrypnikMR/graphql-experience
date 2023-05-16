import { gql } from "apollo-angular";
import { RemoveOneBook } from "./__generated__/removeOneBook";

export const DELETE_ONE_BOOK = gql<RemoveOneBook, {id: string}>`
  mutation RemoveBook($id: String!) {
    removeBook(id: $id)
  }
`;
