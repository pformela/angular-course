import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  public numberOfActiveToInactiveActions: number = 0;
  public numberOfInactiveToActiveActions: number = 0;

  public incrementActiveToInactive(): void {
    this.numberOfActiveToInactiveActions++;
  }

  public incrementInactiveToActive(): void {
    this.numberOfInactiveToActiveActions++;
  }

  public getNumberOfActiveToInactiveActions(): number {
    return this.numberOfActiveToInactiveActions;
  }

  public getNumberOfInactiveToActiveActions(): number {
    return this.numberOfInactiveToActiveActions;
  }
}
