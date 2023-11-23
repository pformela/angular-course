import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public constructor(private counterService: CounterService) {}

  public getNumberOfActiveToInactiveActions(): number {
    return this.counterService.getNumberOfActiveToInactiveActions();
  }

  public getNumberOfInactiveToActiveActions(): number {
    return this.counterService.getNumberOfInactiveToActiveActions();
  }
}
