import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpinterseptorService implements HttpInterceptor {

  constructor() { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {
    const apiKey = "d122353456547kbsdjsdf"
    return next.handle(httpRequest.clone({ setHeaders: { apiKey } })).pipe(
      retry(1),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 404) {
            console.log("err", err)
            return new Observable<HttpEvent<any>>()
          }
        }
      })
    )
  }
}
