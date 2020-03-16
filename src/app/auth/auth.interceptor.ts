import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*
    return from(this.authService.getToken())
      .pipe(
        switchMap(token => {
          req = req.clone({
            setHeaders: {
              'Content-Type': 'application/json; charset=utf-8',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });
          return next.handle(req);
        })
      );
     */
    if (this.authService.accessToken) {
      req = req.clone({
        setHeaders: {
          Accept: 'application/json',
          Authorization: `Bearer ${this.authService.accessToken}`,
        },
      });
    } else {
      req = req.clone({
        setHeaders: {
          Accept: 'application/json',
        },
      });
    }
    return next.handle(req);
  }
}
