import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[AppComponent, BooksComponent, BookComponent, CartComponent],
    imports:[BrowserModule,AuthModule,AppRoutingModule,HttpClientModule,FormsModule],
    bootstrap :[AppComponent]
})
export class AppModule{}