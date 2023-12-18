/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req);

    const modifiedRequest: HttpRequest<any> = req.clone({
      headers: req.headers.append('Auth', 'xyz'),
    });

    console.log('Request is on its way');

    return next.handle(modifiedRequest).pipe(
      tap((event: HttpEvent<any>) => {
        console.log(event);
      })
    );
  }
}
