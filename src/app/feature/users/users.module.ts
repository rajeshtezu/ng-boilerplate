import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UsersRouterModule } from './users-router/users-router.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRouterModule],
})
export class UsersModule {}
