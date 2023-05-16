import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookModalComponent } from "./book-modal.component";
import { BookFormModule } from "../../../components/book-form/book-form.module";


@NgModule({
  declarations: [BookModalComponent],
  imports: [CommonModule, BookFormModule]
})
export class BookModalModule { }
