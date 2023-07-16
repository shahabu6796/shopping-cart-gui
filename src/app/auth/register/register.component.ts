import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/User';
import { UserService } from '../service/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isVerifying: boolean = false;
  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNo: ''
  };
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
  }
  registerUser() {
    if (this.user.name === '' || this.user.email === '' || this.user.password === '' || this.user.confirmPassword === '' || this.user.mobileNo === '') {
      alert("All fields are mandatory")
      return;
    }
    if (this.user.confirmPassword !== this.user.password) {
      alert("Password and confirm password do not match");
      return
    }
    this.isVerifying = true;

    this.userService.registerUser(this.user).subscribe(
      (response: HttpResponse<string>) => {
      },
      (error: HttpErrorResponse) => {
        if (error.status == 201) {
          alert(error.error.text)
          console.error(error.error.text);
        }
        // Handle error case
        // Display the error message to the user
        else {
          console.error('Error: ' + error.error);
          alert('Error: ' + error.error);
        }
        this.isVerifying =false;
      }
    );
  }

}
