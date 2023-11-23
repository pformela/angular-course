import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  private accounts: { name: string; status: string }[] = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];
  public statusUpdated: EventEmitter<string> = new EventEmitter<string>();

  public constructor(private loggingService: LoggingService) {}

  public addAccount(name: string, status: string): void {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }

  public updateStatus(id: number, status: string): void {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }

  public getAccounts(): { name: string; status: string }[] {
    return this.accounts;
  }
}
