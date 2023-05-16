import { gql } from 'apollo-angular';
import { getOneBook } from "./__generated__/getOneBook";
export const GET_ONE_BOOK = gql<getOneBook, string>`
  query GetOneBook($id: String!) {
    getOneBook(id: $id) {
      id
      name
      author
      description
      createdAt
      updatedAt
    }
  }
`;
