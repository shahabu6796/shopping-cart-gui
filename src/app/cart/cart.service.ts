import { Book } from 'src/app/types/Book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart :Book[] = [];
  placedAmount:number = 0;

  constructor() { }
  add(book: Book) {
    const existingBook = this.cart.find(item => item.name === book.name);
    if (existingBook) {
      existingBook.quantity += 1;
      existingBook.price *= 2;
    } else {
      this.cart.push({
        ...book,
        quantity: 1,
        price: book.price
      });
    }
    let totalAmount = 0;
    this.cart.forEach(book => {
      totalAmount += book.price
    });
    this.placedAmount = totalAmount;
    alert('item added into cart..')
  }
  get(){     
    return this.cart;
  }
  remove(book:Book){
    this.cart = this.cart.filter((item)=>item!=book);
  }
}
