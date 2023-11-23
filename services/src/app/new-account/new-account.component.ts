import { Component } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  public constructor(
    private accountsService: AccountsService,
    private loggingService: LoggingService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) =>
      alert(`New Status: ${status}`)
    );
  }

  public onCreateAccount(accountName: string, accountStatus: string): void {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
