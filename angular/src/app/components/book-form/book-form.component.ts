import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators  } from "@angular/forms";
import { CreateBookForm } from "./intefaces";
import { getOneBook_getOneBook } from "../../pages/books/gql/__generated__/getAllBooks";

@Component({
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent implements OnInit{
  bookForm: FormGroup<CreateBookForm>;
  @Input() submitForm: <T>(arg: T) => void = () => {};
  @Input() preparedModel: getOneBook_getOneBook | null = null;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {
    if(this.preparedModel){
      this.bookForm = this.fb.group({
        name: [this.preparedModel.name, Validators.required],
        author: [this.preparedModel.author, Validators.required],
        description: [this.preparedModel.description ?? ''],
      });
    }
  }

  onSubmit() {
      this.submitForm(this.bookForm.value);
  }
}
