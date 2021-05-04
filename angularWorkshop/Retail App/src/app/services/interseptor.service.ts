import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterseptorService implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = `Bearer a123`;
    return next.handle(httpRequest.clone({ setHeaders: { API_KEY } }))
      .pipe(
        retry(1),
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 404) {
              console.log('this should print your error!', err.error);
              return new Observable<HttpEvent<any>>();
            }
          }
        })
      );
  }
}
