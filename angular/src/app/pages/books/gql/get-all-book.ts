import { gql } from 'apollo-angular';
import { getAllBooks } from './__generated__/getAllBooks';


export const GET_ALL_BOOKS = gql<getAllBooks, null>`
    query getAllBooks{
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
