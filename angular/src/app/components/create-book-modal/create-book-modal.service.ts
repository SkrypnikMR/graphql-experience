import { Injectable } from '@angular/core';
import { CreateBookInput } from "./gql/__generated__/createBook";
import { Apollo } from "apollo-angular";
import { CREATE_BOOK } from "./gql/createBook";
import { GET_ALL_BOOKS } from "../../pages/books/gql/get-all-book";

@Injectable({
  providedIn: 'root'
})
export class CreateBookModalService {
  constructor(private readonly apollo: Apollo) { }

  createBook(book: CreateBookInput){
    this.apollo.mutate({
      mutation: CREATE_BOOK,
      variables: { book } ,
      refetchQueries: [{ query: GET_ALL_BOOKS}],
    }).subscribe().unsubscribe();
  }
}
