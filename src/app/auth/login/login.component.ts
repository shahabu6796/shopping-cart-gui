import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNo: ''
  };
  constructor(private userService: UserService) { }
  ngOnInit(): void {

  }
  login(): void {
    console.log('verifying the user:', this.user);
    this.userService.loginUser(this.user);
  }

}
