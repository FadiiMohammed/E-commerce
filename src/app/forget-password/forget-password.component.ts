import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../signup/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  isLoading: boolean = false;
  Loading: boolean = false;
  loggedIn: boolean = false;
  saveLoader: boolean = false;
  resetCode: boolean = false;
  resetCodeError: string = '';
  resetCodeSuccess: string = '';
  constructor(private _authService: AuthService, private _router: Router) {}

  forgetPwForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', Validators.required),
  });

  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,12}/),
    ]),
  });

  submit(form: FormGroup) {
    if (form.valid) {
      this.isLoading = true;
      this._authService.forgetPassword(form.value).subscribe({
        next: (res: any) => {
          console.log(res);
          this.isLoading = false;
          this.resetCode = true;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = true;
        },
      });
    }
  }

  send(form: FormGroup) {
    this.Loading = true;
    this._authService.verifyCode(form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.resetCodeSuccess = res.status;
        this.resetCode = false;
        this.Loading = false;
      },
      error: (err) => {
        console.log(err);
        this.resetCodeError = err.error.message;
        this.Loading = false;
      },
    });
  }

  save(form: FormGroup) {
    if (form.valid) {
      this.saveLoader = true;
      this._authService.resetPassword(form.value).subscribe({
        next: (response) => {
          console.log(response);
          this.saveLoader = false;
          this._router.navigate(['/login']);
        },
        error: (err) => {
          console.log(err);
          this.saveLoader = false;
        },
      });
    }
  }
}
