import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRouterModule } from './auth-router/auth-router.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule, AuthRouterModule],
})
export class AuthModule {}
