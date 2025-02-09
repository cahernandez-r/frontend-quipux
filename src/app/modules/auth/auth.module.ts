import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PrimeNgModule } from 'src/app/shared/modules/primeng/primeng.module';
import { TranslateModule } from '@ngx-translate/core';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PageAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeNgModule,
    TranslateModule,
  ]
})
export class AuthModule { }
