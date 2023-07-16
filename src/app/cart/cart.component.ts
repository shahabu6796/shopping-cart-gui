import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Book } from '../types/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  placedAmount:number = 0;
  constructor(private cartService: CartService,private router:Router) {
  }
  ngOnInit(): void {
    this.placedAmount = this.cartService.placedAmount;
  }
  getCart() {
    return this.cartService.get();
  }
  decreaseQuantity(book: Book) {

  }
  increaseQuantity(book: Book) {

  }
  placeOrder(){
    this.router.navigateByUrl('/order')
  }
}
