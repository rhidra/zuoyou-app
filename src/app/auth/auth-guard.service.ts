import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
      private router: Router,
      private oauthService: OAuthService,
  ) { }

  canActivate(): boolean {
    if (!this.oauthService.hasValidAccessToken()) {
      this.router.navigate(['auth']);
      return false;
    }

    return true;
  }
}
