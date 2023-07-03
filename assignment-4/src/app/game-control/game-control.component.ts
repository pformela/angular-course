import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() gameIntervalFired = new EventEmitter<number>();
  gameInterval: any;
  currentNumber = 1;

  onStartGame() {
    this.gameInterval = setInterval(() => {
      this.gameIntervalFired.emit(this.currentNumber);
      this.currentNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.gameInterval);
  }
}
