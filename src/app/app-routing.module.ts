import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutePath } from './constant/routes';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: RoutePath.LOGIN,
    loadChildren: () =>
      import('./feature/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: RoutePath.HOME,
        loadChildren: () =>
          import('./feature/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: RoutePath.USERS,
        loadChildren: () =>
          import('./feature/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
  { path: RoutePath.LOGOUT, component: LogoutComponent },
  { path: RoutePath.NOT_FOUND, component: NotFoundComponent },
  { path: '**', redirectTo: RoutePath.NOT_FOUND }, // Should be the last path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
