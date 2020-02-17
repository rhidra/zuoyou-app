import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {isBoolean} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
      private router: Router,
      private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.authService.getToken().then(token => {
        console.log('Controle d\'authentification...');

        if (token) {
          console.log('Connecté :) !');
          resolve(true);
        } else {
          console.log('Login obligatoire !');
          this.router.navigate(['auth'], {queryParams: {returnUrl: state.url}});
          resolve(false);
        }
      });
    });
  }
}
