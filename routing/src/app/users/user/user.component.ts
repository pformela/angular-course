import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../user.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  public user: IUser = {
    id: 0,
    name: '',
  };
  private paramsSubscription: Subscription = new Subscription();

  public constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };

    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

  public ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
