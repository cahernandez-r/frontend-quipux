import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { LoginRequest, LoginResponse, RegisterRequest } from 'src/app/shared/models/auth-models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formRegister: FormGroup;
  
  constructor(private readonly authService:AuthService,
    private readonly fb: FormBuilder,
    private router: Router
  ) {
    this.formRegister = this.fb.group({
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required],
    });
  }
  
  onRegister():void {
    const request: RegisterRequest = {...this.formRegister.value}
    this.authService.register(request).subscribe({
      next:(response: LoginResponse | null) => {
        if (response) {
          this.router.navigate(['auth', 'login']);
        }
      }
    });
  }

  get controlEmail():FormControl {
    return this.formRegister.get("email") as FormControl;
  }

  get controlPassword():FormControl {
    return this.formRegister.get("password") as FormControl;
  }
}
