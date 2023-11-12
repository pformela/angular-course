import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public currentNumber: number = 0;
  public numbers: number[] = [];

  public onNumberChanged(number: number): void {
    this.currentNumber = number;
    this.numbers.push(number);
  }

  public onIntervalStopped(): void {
    this.numbers = [];
  }
}
