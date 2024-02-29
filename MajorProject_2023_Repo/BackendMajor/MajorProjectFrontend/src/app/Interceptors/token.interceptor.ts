import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth : AuthService, private toastr : ToastrService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();
    if (token) {
      request = request.clone({
        setHeaders : {authorization : `Bearer ${token}`}
      })
    }
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            if(event.status == 401) {
              this.toastr.success('Unauthorized access!')
            }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            this.toastr.success('Unauthorized access!')
          }
          else if(error.status === 404) {
            this.toastr.success('Page Not Found!')
          }
        }
      }));
  }
}
