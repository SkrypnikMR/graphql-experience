import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBookModalComponent } from "./create-book-modal.component";
import { BookFormModule } from "../book-form/book-form.module";


@NgModule({ declarations: [CreateBookModalComponent], imports: [CommonModule, BookFormModule]})
export class CreateBookModalModule { }
