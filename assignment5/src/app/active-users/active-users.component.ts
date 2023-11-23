import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  public activeUsers: string[] = ['Chris', 'Manu'];

  public constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.activeUsers = this.userService.getActiveUsers();
  }

  public onSetToInactive(id: number): void {
    this.userService.onSetToInactive(id);
    this.activeUsers = this.userService.getActiveUsers();
  }
}
