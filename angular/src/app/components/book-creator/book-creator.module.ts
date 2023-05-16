import { NgModule } from '@angular/core';
import { BookCreatorComponent } from "./book-creator.component";
import { CreateBookModalModule } from "../create-book-modal/create-book-modal.module";

@NgModule({
  declarations: [BookCreatorComponent],
  imports: [CreateBookModalModule],
  exports: [BookCreatorComponent]
})
export class BookCreatorModule { }
