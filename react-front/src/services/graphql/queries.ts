import { gql } from '@apollo/client';

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
