import { AuthService } from './core/services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  isLoading: boolean = false;
  ApiError: string = '';
  constructor(private _authService: AuthService, private _router: Router) {}

  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{3,12}/),
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{3,12}/),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^01[125][0-8]{8}/),
      ]),
    },
    {
      validators: this.validateRePassword,
    }
  );

  register(form: FormGroup) {
    if (form.valid) {
      this.isLoading = true;
      this._authService.register(form.value).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          this._router.navigate(['/login']);
        },
        error: (err: any) => {
          this.ApiError = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }

  validateRePassword(registerForm: any) {
    let passwordControl = registerForm.get('password');
    let rePasswordControl = registerForm.get('rePassword');
    if (passwordControl?.value == rePasswordControl?.value) {
      return null;
    } else {
      rePasswordControl?.setErrors({
        rePasswordNotMatch: 'Password and rePassword should be Match',
      });
      return { rePasswordNotMatch: 'Password and rePassword should be Match' };
    }
  }
}
