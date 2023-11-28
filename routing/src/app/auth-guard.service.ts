import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const canActivate: CanActivateFn = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> => {
  const service: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return service.isAuthenticated().then((authenticated: boolean) => {
    if (authenticated) {
      return true;
    }

    router.navigate(['/']);

    return false;
  });
};

export const canActivateChild: CanActivateChildFn = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> => {
  const service: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return service.isAuthenticated().then((authenticated: boolean) => {
    if (authenticated) {
      return true;
    }

    router.navigate(['/']);

    return false;
  });
};
