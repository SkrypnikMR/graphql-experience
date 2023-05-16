import { gql } from "apollo-angular";


export const CREATE_BOOK = gql`
  mutation CreateBook($book: CreateBookInput!) {
    createBook(createBook: $book) {
      id
      name
      author
      description
      createdAt
      updatedAt
    }
  }
`;
