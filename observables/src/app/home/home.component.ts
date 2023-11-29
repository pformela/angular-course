/* eslint-disable no-console */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription = new Subscription();

  public ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe((count: number) => {
    // console.log(count);
    // });
    const customIntervalObs: Observable<number> = new Observable(
      (observer: Observer<number>) => {
        let count: number = 0;
        setInterval(() => {
          observer.next(count);
          if (count === 2) observer.complete();
          if (count > 3) observer.error(new Error('Count is greater than 3!'));
          count++;
        }, 1000);
      }
    );

    this.firstObsSubscription = customIntervalObs
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return `Round: ${data}`;
        })
      )
      .subscribe(
        (data: string) => {
          console.log(data);
        },
        (error: Error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  public ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
