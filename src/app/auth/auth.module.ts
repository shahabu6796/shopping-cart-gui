import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { OrderFormComponent } from './order.form/order.form.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    MessageBoxComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
