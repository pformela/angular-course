import { Component, Input } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() public account: { name: string; status: string } = {
    name: '',
    status: '',
  };
  @Input() public id: number = 0;

  public constructor(private accountsService: AccountsService) {}

  public onSetTo(status: string): void {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdated.emit(status);
  }
}
