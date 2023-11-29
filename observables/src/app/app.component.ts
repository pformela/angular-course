import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public userActivated: boolean = false;
  public activatedSub: Subscription = new Subscription();

  public constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      (didActivate: boolean) => (this.userActivated = didActivate)
    );
  }

  public ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
