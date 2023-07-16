import { CartService } from '../cart/cart.service';
import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Book } from '../types/Book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit,OnDestroy {
  @Input() book:Book={} as Book;
  isInCart :boolean =false;

  
  constructor(private cartService: CartService,private router:Router){
  }
  ngOnInit(): void {
    console.log('this is from book component class',this.book);
    
  }
  addToCart(){   
    this.isInCart = true;
    this.cartService.add(this.book);

    //this.router.navigate(['/login']);
  }
  removeFromCart(){
    this.isInCart =false;
    this.cartService.remove(this.book)
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy on destroy');
  }
}
