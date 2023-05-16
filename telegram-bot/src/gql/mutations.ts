import { gql } from 'graphql-request';

export const UPDATE_BOOK = gql`
  mutation UpdateBook($book: UpdateBookInput!) {
    updateBook(updateBook: $book) {
      id
      name
      author
      description
      createdAt
      updatedAt
    }
  }
`;

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

export const REMOVE_BOOK = gql`
  mutation RemoveBook($id: String!) {
    removeBook(id: $id)
  }
`;
