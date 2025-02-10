import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { emailRegex } from 'src/app/core/constants/constants';
import { CODES_ERROR } from 'src/app/core/enums/enums';
import { LoginResponse, RegisterRequest } from 'src/app/shared/models/auth-models';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formRegister: FormGroup;
  
  constructor(private readonly authService:AuthService,
    private readonly fb: FormBuilder,
    private router: Router,
    private utilService: UtilService,
  ) {
    this.formRegister = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(emailRegex)]],
      password: ["", Validators.required],
    });
  }
  
  onRegister():void {
    const request: RegisterRequest = {...this.formRegister.value}
    this.authService.register(request).subscribe({
      next:(response: LoginResponse | null) => {
        if (response) {
          this.router.navigate(['auth', 'login']);
          this.utilService.showMessage("messages.account-created", "success");
        }
      },
      error: (e) => {
        if (CODES_ERROR.CODE_ERROR_USER_ALREADY_EXIST === e.error) {
          this.utilService.showMessage("messages.error.ERR002", "error");
          return;  
        }
        this.utilService.showMessage("messages.error-unexpected", "error");
      }
    });
  }

  onBack():void {
    this.router.navigate(["auth", "login"]);
  }

  get controlEmail():FormControl {
    return this.formRegister.get("email") as FormControl;
  }

  get controlPassword():FormControl {
    return this.formRegister.get("password") as FormControl;
  }
}
