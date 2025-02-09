import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { LoginRequest, LoginResponse } from 'src/app/shared/models/auth-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(private readonly authService:AuthService,
    private readonly fb: FormBuilder,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onLogin():void {
    const request: LoginRequest = {...this.formLogin.value}
    this.authService.login(request).subscribe({
      next:(response: LoginResponse | null) => {
        if (response) {
          this.authService.saveToken(response.token);
          this.router.navigate(['']);
        }
      }
    });
  }

  get controlEmail():FormControl {
    return this.formLogin.get("email") as FormControl;
  }

  get controlPassword():FormControl {
    return this.formLogin.get("password") as FormControl;
  }
}
