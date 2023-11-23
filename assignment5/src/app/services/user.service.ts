import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  private activeUsers: string[] = ['Max', 'Anna'];
  private inactiveUsers: string[] = ['Chris', 'Manu'];

  public constructor(private counterService: CounterService) {}

  public onSetToInactive(id: number): void {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  public onSetToActive(id: number): void {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }

  public getActiveUsers(): string[] {
    return this.activeUsers;
  }

  public getInactiveUsers(): string[] {
    return this.inactiveUsers;
  }
}
