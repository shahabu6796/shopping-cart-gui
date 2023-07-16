import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from "src/app/types/User";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {

  }
  opt: string = "";
  registerUrl = "http://localhost:8088/user/register";
  loginUrl = "http://localhost:8088/user/login";
  validateMobileAndEmailUrl = "http://localhost:8088/user/validateinput";
  validateOtpUrl = "http://localhost:8088/user/validateotp";
  resetPasswordUrl = "http://localhost:8088/user/resetpassword";

  // sign up user 
  registerUser(user: User): Observable<any> {
    const params = {
      name: user.name,
      email: user.email,
      password: user.password,
      mobileNo: user.mobileNo
    }
    return this.httpClient.post(this.registerUrl, params, { observe: 'response' });
  }


  loginUser(user: User): Observable<any> {
    const body = new HttpParams()
      .set('email', user.email)
      .set('password', user.password);
    return this.httpClient.post(this.loginUrl, body, { observe: 'response' });
  }


  validateUser(user: User): Observable<any> {
    const body = new HttpParams()
      .set('email', user.email)
      .set('mobileNo', user.mobileNo);
    return this.httpClient.post(this.validateMobileAndEmailUrl, body, { observe: 'response' });
  }
  public validateOtp(user: User, otp: string): Observable<any> {
    const body = new HttpParams()
      .set('mobileNo', user.mobileNo)
      .set('otp', otp);
    return this.httpClient.post(this.validateOtpUrl, body, { observe: 'response' });
  }

  public resetPassword(email: string, mobileNo: string, password: string): Observable<any> {
    let body = new HttpParams();
    body = body.set('email', email)
    body = body.set('mobileNo', mobileNo)
    body = body.set('newPassword', password);
    return this.httpClient.post(this.resetPasswordUrl, body, { observe: 'response' });
  }
}