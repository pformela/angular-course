import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  public activatedEmitter: Subject<boolean> = new Subject<boolean>();
}
