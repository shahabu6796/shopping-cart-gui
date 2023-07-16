import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';
import { MessageBoxComponent } from './auth/message-box/message-box.component';
import { OrderFormComponent } from './auth/order.form/order.form.component';

const routes:Routes = [
    {path:'book',component:BooksComponent},
    {path:'',component:BooksComponent},
    {path:'cart',component:CartComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'resetpassword',component:ResetpasswordComponent},
    {path: 'message', component: MessageBoxComponent },
    {path: 'order', component: OrderFormComponent }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}