import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment3';
  public isPasswordVisible: boolean = false;
  public logs: string[] = [];

  public togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.logs.push(
      `[${new Date().toLocaleTimeString()}] Password visibility toggled to [${
        this.isPasswordVisible
      }]`
    );
  }
}
