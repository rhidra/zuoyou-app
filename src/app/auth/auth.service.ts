import { Injectable } from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  delaySize = 30;
  delay = 0;
  id: string;

  constructor(
      private oauthService: OAuthService,
      private http: HttpClient,
  ) { }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  sendCode(phone: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      console.log('send phone number...');
      this.http.post('http://localhost:9000/auth/', {id: this.id, phone}).subscribe((user: any) => {
        console.log('received SMS :', 123456);
        this.id = user.id;
        this.startTimer();
        resolve();
      }, () => reject());
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
    this.http.post('http://localhost:9000/auth/login', {id: this.id, phone, code}).subscribe(res => {
      this.delay = 0;
      this.id = '';
      console.log(res);
    });
  }
}
