import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  delaySize = 30;
  delay = 0;
  pendingId: string;
  user: User;
  refreshToken: string;
  accessToken: string;

  getToken(): Promise<any> {
    return new Promise<string>(resolve => {
      if (!this.isTokenExpired()) { return resolve(this.accessToken); }
      if (!this.user) { return resolve(null); }

      this.http.post('http://localhost:9000/auth/token', {id: this.user._id, refreshToken: this.refreshToken})
          .subscribe((res: any) => {
            console.log('Refresh token :', res.token);
            this.accessToken = res.token;
            resolve(this.accessToken);
          }, () => resolve(null));
    });
  }

  constructor(private http: HttpClient) { }

  isTokenExpired(): boolean {
    if (!this.accessToken) { return true; }
    const decoded = jwt_decode(this.accessToken);
    if (decoded.exp === undefined) { return false; }
    const date = new Date(0).setUTCSeconds(decoded.exp);
    return !(date.valueOf() > new Date().valueOf());
  }

  requestCode(phone: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post('http://localhost:9000/auth/phone/', {id: this.pendingId, phone}).subscribe((user: any) => {
        this.pendingId = user.id;
        this.startTimer();
        resolve();
      }, reject);
    });
  }

  startTimer() {
    this.delay = this.delaySize;
    const timer = () => {
      this.delay--;
      if (this.delay > 0) {
        setTimeout(timer, 1000);
      }
    };
    timer();
  }

  login(phone: string, code: string) {
    return new Promise(resolve => {
      this.http.post('http://localhost:9000/auth/phone/login', {id: this.pendingId, phone, code}).subscribe((res: any) => {
        this.delay = 0;
        this.pendingId = '';
        this.refreshToken = res.refreshToken;
        this.user = new User();
        this.user._id = res.id;
        this.user.email = res.email;
        this.user.phone = res.phone;
        this.accessToken = res.token;
        resolve();
      });
    });
  }
}
