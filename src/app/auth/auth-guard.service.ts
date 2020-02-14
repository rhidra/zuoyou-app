import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
      private router: Router,
      private authService: AuthService
  ) { }

  canActivate(): boolean {
    console.log('Controle d\'authentification...');
    if (!this.authService.isAuthenticated()) {
      console.log('Pas connecté !');
      this.router.navigate(['auth']);
      return false;
    }
    console.log('Connecté :) !');

    return true;
  }
}
