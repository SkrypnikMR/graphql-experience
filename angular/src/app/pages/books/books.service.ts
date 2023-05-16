import { Injectable } from '@angular/core';
import { GET_ALL_BOOKS } from "./gql/get-all-book";
import { map } from "rxjs";
import { Apollo } from "apollo-angular";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly apollo: Apollo) { }

  getAllBooks() {
    return this.apollo
      .watchQuery({
        query: GET_ALL_BOOKS,
      }).valueChanges.pipe(map(({data}) => data.getAllBooks));
  }
}
