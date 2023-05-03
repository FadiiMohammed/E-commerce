import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let newReq = request.clone({
      headers: request.headers.set(
        'token',
        `${localStorage.getItem('userToken')}`
      ),
    });
    return next.handle(newReq);
  }
}
