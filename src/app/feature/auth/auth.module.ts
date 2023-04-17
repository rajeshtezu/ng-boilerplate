import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRouterModule } from './auth-router/auth-router.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AuthRouterModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
