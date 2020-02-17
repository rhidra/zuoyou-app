import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {NavController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
      private navCtrl: NavController,
      private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.authService.getToken().then(token => {
      if (token) {
        return new Promise(r => r(true));
      } else {
        this.navCtrl.navigateForward(['/', 'auth'], {queryParams: {returnUrl: state.url}});
        return new Promise(r => r(false));
      }
    });
  }
}
