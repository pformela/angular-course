import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const canDeactivate: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate
): Observable<boolean> | Promise<boolean> | boolean => {
  return component.canDeactivate();
};
