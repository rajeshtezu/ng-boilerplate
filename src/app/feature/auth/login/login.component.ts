import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/constant/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.navigateIfAuthenticated();
    this.loginFormInit();
  }

  navigateIfAuthenticated() {
    if (localStorage.getItem('user')) {
      this.router.navigateByUrl(RoutePath.HOME);
    }
  }

  loginFormInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  handleLogin(e: MouseEvent) {
    e.preventDefault();

    if (!this.loginForm.valid) {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

      return;
    }

    const { email, password } = this.loginForm.value;
    localStorage.setItem('user', email);

    this.router.navigateByUrl(RoutePath.HOME);
  }
}
