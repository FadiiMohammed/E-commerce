import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../signup/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading: boolean = false;
  ApiError: string = '';
  openForm: boolean = false;
  constructor(private _authService: AuthService, private _router: Router) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login(form: any) {
    if (form.valid) {
      this.isLoading = true;
      this._authService.login(form.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          console.log(res);
          localStorage.setItem('userToken', res.token);
          this._authService.getUserData();
          this._router.navigate(['/home']);
        },
        error: (err) => {
          this.ApiError = err.error.message;
          this.isLoading = false;
        },
      });
    }
  }
}
