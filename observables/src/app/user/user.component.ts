import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public id: number = 0;

  public constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  public onActivate(): void {
    this.userService.activatedEmitter.next(true);
  }
}
