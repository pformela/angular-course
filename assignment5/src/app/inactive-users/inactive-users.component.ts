import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  public inactiveUsers: string[] = ['Chris', 'Manu'];

  public constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.inactiveUsers = this.userService.getInactiveUsers();
  }

  public onSetToActive(id: number): void {
    this.userService.onSetToActive(id);
    this.inactiveUsers = this.userService.getInactiveUsers();
  }
}
