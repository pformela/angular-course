/* eslint-disable @typescript-eslint/naming-convention */
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { IServer } from '../server.model';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { inject } from '@angular/core';

export interface IServerResolver {
  resolve: () => IServer | Observable<IServer> | Promise<IServer>;
}

export const serverResolver: ResolveFn<IServer> = (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
): IServer | Observable<IServer> | Promise<IServer> => {
  const serverService: ServersService = inject(ServersService);

  return serverService.getServer(+_route.params['id']);
};
