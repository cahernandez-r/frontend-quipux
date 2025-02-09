import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // Método para obtener el token de autenticación
  private getAuthToken(): string | null {
    return"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjYW1pbG8uaGVybm5hZGV6IiwiZXhwIjoxNzM5MDcwMzE1fQ.wTCxL2R6Wvj9kL1lOSmvurk9Fz2TRJBn6cIxFM5mGtJNEVaYCrA6egA3Xr3AlAvoSbWprcQ-Ukh63K-dps297w"
    // return localStorage.getItem('authToken');  
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getAuthToken();

    // Si hay un token, agregamos el encabezado Authorization
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req); // Pasamos la solicitud modificada
  }
}
