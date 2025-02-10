import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  private getAuthToken(): string | null {
    const token: string | null = localStorage.getItem('authToken');
    const urlSegments = this.router.url.split('/');
    const lastPartUrl = urlSegments[urlSegments.length - 1];
    if (!token && lastPartUrl !== "register") {
      this.router.navigate(['auth', 'login']);
      
    }
    return token;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getAuthToken();

    if (!token) {
      return next.handle(req);
    }

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req);
  }
}
