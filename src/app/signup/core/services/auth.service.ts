import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private _http: HttpClient, private _router: Router) {
    if (localStorage.getItem('userToken')) {
      this.getUserData();
    }
  }

  register(data: any): Observable<any> {
    return this._http.post(
      'https://route-ecommerce.onrender.com/api/v1/auth/signup',
      data
    );
  }

  login(data: any): Observable<any> {
    return this._http.post(
      'https://route-ecommerce.onrender.com/api/v1/auth/signin',
      data
    );
  }

  getUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let encoded = jwtDecode(encodedToken);
    this.userData.next(encoded);
  }

  logOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['/login']);
  }
  forgetPassword(data: any): Observable<any> {
    return this._http.post(
      `https://route-ecommerce.onrender.com/api/v1/auth/forgotPasswords`,
      data
    );
  }

  verifyCode(resetCode: any): Observable<any> {
    return this._http.post(
      'https://route-ecommerce.onrender.com/api/v1/auth/verifyResetCode',
      resetCode
    );
  }

  resetPassword(data: any): Observable<any> {
    return this._http.put(
      'https://route-ecommerce.onrender.com/api/v1/auth/resetPassword',
      data
    );
  }
}
