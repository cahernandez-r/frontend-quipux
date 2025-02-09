import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './core/interceptor/auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Asegúrate de importar esto
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ToastModule,
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: httpTranslateLoader,
            deps: [HttpClient]
        },
        defaultLanguage: 'es'
      }),
    ],
    providers: [provideHttpClient(withInterceptorsFromDi()),  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}