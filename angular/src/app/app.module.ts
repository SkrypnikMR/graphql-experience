import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { BookCreatorModule } from "./components/book-creator/book-creator.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    GraphQLModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BookCreatorModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
