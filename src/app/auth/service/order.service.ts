import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/types/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }
  bookingOrderUrl = "http://localhost:8088/order/placeorder"

  placeOrder(order:Order):Observable<any>{
    const params={
      address:order.address,
      name:order.name,
      amount:order.amount,
      email:order.email
    }
    return this.httpClient.post(this.bookingOrderUrl,params,{observe:'response'});
  }
}
