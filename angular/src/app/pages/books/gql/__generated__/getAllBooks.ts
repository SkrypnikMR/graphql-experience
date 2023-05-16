/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllBooks
// ====================================================

export interface getAllBooks_getAllBooks {
  __typename: "BookEntity";
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  author: string;
}

export interface getOneBook_getOneBook {
  __typename: "BookEntity";
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  author: string;
}

export interface getOneBook {
  getOneBook: getOneBook_getOneBook;
}

export interface getAllBooks {
  getAllBooks: getAllBooks_getAllBooks[];
}
