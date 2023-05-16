import { gql } from 'graphql-request';

export const GET_ALL_BOOKS = gql`
  query getAllBooks {
    getAllBooks {
      id
      name
      author
      createdAt
      updatedAt
      description
    }
  }
`;

export const GET_ONE_BOOK = gql`
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
