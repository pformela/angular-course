import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  public logStatusChange(status: string): void {
    console.log('An account status changed, new status: ' + status);
  }
}
