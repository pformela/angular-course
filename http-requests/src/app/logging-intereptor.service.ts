/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export class LoggingInterceptorService implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Outgoing request');
    console.log(req.url);
    console.log(req.headers);

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        console.log(event);
      })
    );
  }
}
