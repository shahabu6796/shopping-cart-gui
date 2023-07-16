import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
interface Book {
  name: string
  author: string
  src: string
  price: number
   quantity:number
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {
  }
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
    console.log(this.books);
    
  }
  books: Book[] = [];

  isShowing: boolean = true;


  toggleBooks() {
    this.isShowing = !this.isShowing
  }
}
