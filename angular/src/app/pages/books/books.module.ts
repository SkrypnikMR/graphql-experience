import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule } from "@angular/router";
import { BookModalModule } from "./book-modal/book-modal.module";



@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    BookModalModule,
    RouterModule.forChild([
      { path: "", component: BooksComponent }
    ]),
  ]
})
export class BooksModule { }
