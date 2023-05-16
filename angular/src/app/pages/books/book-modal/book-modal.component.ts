import { Component, Input, OnInit } from "@angular/core";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {  Observable } from "rxjs";

import {  getOneBook_getOneBook } from "./gql/__generated__/getOneBook";
import { BookModalService } from "./book-modal.service";
import { UpdateOneBookInput } from "./gql/__generated__/updateOneBook";


@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
  providers:[BookModalService],
})
export class BookModalComponent implements OnInit{
  @Input() id = '';
  book$?: Observable<getOneBook_getOneBook  | null | undefined>;
  isEditing = false;


  constructor(
    public activeModal: NgbActiveModal,
    private readonly bookModalService: BookModalService
  ) {
  }


  ngOnInit() {
    this.book$ = this.bookModalService.getBookById(this.id);
  }

  async onDelete(id: string) {
    const success = await this.bookModalService.removeBookById(id);
    if(success) {
      this.activeModal.close();
    }
  }

  onEdit(){
    this.onCancel();
    this.isEditing = true;
  }

  onCancel() {
    this.isEditing = false;
  }

   onFormSubmit =  async <T = Omit<UpdateOneBookInput, 'id'>>(formValues: T) => {
    const updatedBook = {  id: this.id, ...(formValues as Omit<UpdateOneBookInput, 'id'>) };

    this.bookModalService.updateBook(updatedBook as UpdateOneBookInput);
    this.isEditing = false;
  }
}







