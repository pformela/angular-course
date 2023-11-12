import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  public interval: NodeJS.Timeout = setInterval(() => {}, 0);
  public isRunning: boolean = false;
  public isPaused: boolean = false;
  public currentNumber: number = 0;

  @Output() public intervalFired: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() public intervalStopped: EventEmitter<void> =
    new EventEmitter<void>();

  public onStartGame(): void {
    if (this.isRunning) {
      this.isPaused = false;
      return;
    }

    this.isRunning = true;

    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.currentNumber++;
        this.intervalFired.emit(this.currentNumber);
      }
    }, 1000);
  }

  public onStopGame(): void {
    clearInterval(this.interval);
    this.isRunning = false;
    this.isPaused = false;
    this.intervalStopped.emit();
    this.currentNumber = 0;
  }

  public onPauseGame(): void {
    this.isPaused = true;
  }
}
