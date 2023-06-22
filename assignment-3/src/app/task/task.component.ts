import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  isVisible: boolean = false;
  logs: Array<string> = [];

  changeVisibility() {
    const log: string = `[${new Date().toLocaleString()}] - Visibility changed to ${
      this.isVisible ? 'visible' : 'hidden'
    }`;
    this.logs.push(log);
    this.isVisible = !this.isVisible;
  }
}
