import { FormControl } from "@angular/forms";

export interface CreateBookForm {
  name: FormControl<string | null>;
  author: FormControl<string | null>;
  description: FormControl<string | null>;
}

export interface CreateBookInput {
  name: string;
  author: string;
  description: string;
}
