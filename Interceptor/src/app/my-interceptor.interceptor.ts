import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor
 {


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>
  {
     console.log('HTTP Request started');

     const clonedRequest=request.clone({
      setHeaders:{
        Authorization:'Bearer Your_Token_Here'
      }
     });

    return next.handle(clonedRequest).pipe(
    tap(
      event =>
        {
          console.log("HTTP Response received");
        },
        error =>
          {
            console.error('HTTP Request error');
          }
        
    )

    );
  }
}
