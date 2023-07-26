import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  user:any;
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    let c = true;    
    const re = '/api/auth/login/';
    if (req.url.search(re) === -1) {
      this.user = JSON.parse(localStorage.getItem("user")||'{}');
      console.log(this.user.authenticationToken);
      
      const token = this.user.authenticationToken
      if (token != null) {
        authReq = req.clone({
          headers: req.headers.set("Authorization", 'Bearer ' + token),
        });
      }
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
];
