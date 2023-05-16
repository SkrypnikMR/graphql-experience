import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateBookModalComponent } from "../create-book-modal/create-book-modal.component";


@Component({
  selector: 'book-creator',
  templateUrl: './book-creator.component.html',
})
export class BookCreatorComponent {
  constructor(private readonly modalService: NgbModal) {}

  onCreateBook() {
    this.modalService.open(CreateBookModalComponent, { centered: true });
  }
}
