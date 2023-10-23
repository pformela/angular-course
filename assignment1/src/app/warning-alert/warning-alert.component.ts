import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.scss'],
})
export class WarningAlertComponent {
  public message: string = 'Warning message!';
}
