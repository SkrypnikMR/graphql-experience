import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { getAllBooks_getAllBooks } from "./gql/__generated__/getAllBooks";
import { BookModalComponent } from './book-modal/book-modal.component';
import { BooksService } from "./books.service";


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[BooksService]
})
export class BooksComponent implements OnInit {
  books$?: Observable<getAllBooks_getAllBooks[]>
  constructor(
    private  readonly  modalService: NgbModal,
    private readonly bookService: BooksService
  ) {}

  ngOnInit() {
    this.books$ = this.bookService.getAllBooks();
  }

  openModal(id: string){
    const modalRef = this.modalService.open(
      BookModalComponent, { centered: true }
    );
    modalRef.componentInstance.id = id;
  }

}
