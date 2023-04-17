import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { RoutePath } from './constant/routes';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = !!localStorage.getItem('user');

    if (!isAuthenticated) {
      this.router.navigateByUrl(RoutePath.LOGIN);
    }

    return isAuthenticated;
  }
}
