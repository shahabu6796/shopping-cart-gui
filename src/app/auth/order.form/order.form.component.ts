import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { OrderService } from 'src/app/auth/service/order.service';
import { Order } from 'src/app/types/Order';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-order.form',
  templateUrl: './order.form.component.html',
  styleUrls: ['./order.form.component.css']
})
export class OrderFormComponent implements OnInit {
  order:Order={
    name: '',
    address: '',
    amount: 0,
    email: ''
  }
  selectedPaymentMethod:string = '';
   totalAmount:number = 0;
  ngOnInit(): void {
  }
  constructor(private cartService:CartService,private orderService:OrderService){
    this.totalAmount = this.cartService.placedAmount;
  }
  getTotalAmount(){
    return this.totalAmount;
  }
  placeOrder(){
    if(this.order.name===''||this.order.email===''){
      alert('Name and Email is mandatory');
      return;
    }
    this.order.amount = this.totalAmount
    this.orderService.placeOrder(this.order).subscribe(
      (response: HttpResponse<string>) => {
      },
      (error: HttpErrorResponse) => {
        if (error.status == 200) {
          alert(error.error.text)
          console.error(error.error.text);
        }
        // Handle error case
        // Display the error message to the user
        else {
          console.error('Error: ' + error.error);
          alert('Error: ' + error.error);
        }
      }
    );
  }

}
