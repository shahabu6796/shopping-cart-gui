import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/User';
import { UserService } from '../service/user.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  isDisabled: boolean = true;
  password: string = '';
  confirmPassword: string = '';
  isSuccess: boolean = false;
  isError: boolean = false;
  message: string = '';
  showOTP: boolean = false;
  setNewPassword: boolean = false;
  otp: string = "";
  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNo: ''
  };

  ngOnInit(): void {
  }
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }
  validateMobile() {
    if (this.user.email === '' || this.user.mobileNo === '') {
      this.isError = true;
      this.message = 'Email and Mobile should not be empty';
      // this.router.navigateByUrl('/message');
      alert('Email and Mobile should not be empty');
      return;
    }

    console.log('validating the mobile no. and email id');

    this.userService.validateUser(this.user).subscribe(
      (response: HttpResponse<string>) => {
      },
      (error: HttpErrorResponse) => {
        if (error.status == 200) {
          this.message = error.error.text;
          alert(error.error.text)
          this.isSuccess = true;
          console.log(error.error.text);
          this.showOTP = true;
          //this.router.navigate(['/message']);
          //this.router.navigateByUrl('/message');
        }
        // Handle error case
        // Display the error message to the user
        else {
          this.isError = true;
          this.message = error.error;
          console.error('Error: ' + error.error);
          //this.router.navigate(['/message']);
          //this.router.navigateByUrl('/message');
          alert('Error: ' + error.error);
        }
      }
    );
  }

  validateOTP() {
    this.userService.validateOtp(this.user, this.otp)
      .subscribe((response: HttpResponse<string>) => {
      },
        (error: HttpErrorResponse) => {
          if (error.status == 200) {
            alert(error.error.text)
            console.log(error.error.text);
            this.showOTP = false;
            this.setNewPassword = true;
            this.isDisabled = false;
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
  resetPassword() {
    if (this.password !== this.confirmPassword) {
      alert('password does not match');
    }
    else {
      this.userService.resetPassword(this.user.email, this.user.mobileNo, this.password)
      .subscribe((response: HttpResponse<string>) => {
      },
        (error: HttpErrorResponse) => {
          if (error.status == 200) {
            alert(error.error.text)
            console.log(error.error.text);
            this.router.navigate(['/login']);
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
}
