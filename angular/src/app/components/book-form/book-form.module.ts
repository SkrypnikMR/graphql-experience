import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { BookFormComponent } from "./book-form.component";
@NgModule({
  declarations: [BookFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports:[BookFormComponent]
})
export class BookFormModule { }
