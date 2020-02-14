import { Injectable } from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  delaySize = 10;
  delay = 0;

  constructor(
      private oauthService: OAuthService,
      private http: HttpClient,
  ) { }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  sendCode(phoneNumber: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      console.log('send phone number...');
      this.http.post('http://localhost:9000/auth/', {phone: phoneNumber}).subscribe(() => {
        console.log('received SMS :', 123456);
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
}
