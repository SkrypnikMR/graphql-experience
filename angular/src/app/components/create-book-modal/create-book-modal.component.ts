import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

import { CreateBookInput } from "./gql/__generated__/createBook";
import { CreateBookModalService } from './create-book-modal.service';

@Component({
  selector: 'create-book-modal',
  templateUrl: './create-book-modal.component.html',
  providers: [CreateBookModalService],
})
export class CreateBookModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private readonly createBookModalService: CreateBookModalService,
  ) {}


  ngOnInit() {

  }
  onFormSubmit = <T = CreateBookInput>(formValues: T) => {
    this.createBookModalService.createBook(formValues as CreateBookInput);
    this.activeModal.close();
  }
}







