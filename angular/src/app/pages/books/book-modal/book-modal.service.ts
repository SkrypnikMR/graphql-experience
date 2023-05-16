import { Injectable } from '@angular/core';
import { firstValueFrom, map } from "rxjs";
import { Apollo } from "apollo-angular";

import { GET_ONE_BOOK,  } from "./gql/get-one-book";
import { DELETE_ONE_BOOK } from "./gql/remove-one-book";
import { GET_ALL_BOOKS } from "../gql/get-all-book";
import { getOneBook_getOneBook } from "./gql/__generated__/getOneBook";
import { UPDATE_BOOK } from "./gql/update-one-book";
import { UpdateOneBookInput } from "./gql/__generated__/updateOneBook";

@Injectable({
  providedIn: 'root'
})
export class BookModalService {

  constructor(private readonly apollo: Apollo) { }

  async removeBookById(id: string) {
    const response = await firstValueFrom(this.apollo.mutate({
      mutation: DELETE_ONE_BOOK,
      variables: { id },
      refetchQueries: [{ query: GET_ALL_BOOKS}],
    }));
    return response?.data?.removeBook;
  }
  getBookById(id: string) {
    return this.apollo
      .watchQuery({
        query: GET_ONE_BOOK,
        variables: { id }
      }).valueChanges.pipe(map(({data}) => data.getOneBook));
  }



  updateBook(book: UpdateOneBookInput) {
    return this.apollo.mutate({
      mutation: UPDATE_BOOK,
      variables: { book },
      refetchQueries: [{ query: GET_ALL_BOOKS }, { query: GET_ONE_BOOK}],
    }).subscribe().unsubscribe();
  }
}
