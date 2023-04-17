import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { UsersComponent } from '../users.component';

const routes: Route[] = [
  {
    path: '',
    component: UsersComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersRouterModule {}
