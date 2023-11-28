import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  public message: string = '';

  public constructor(private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.message = this.route.snapshot.data['message'];

    this.route.data.subscribe((data: Data) => {
      this.message = data['message'];
    });
  }

  public onNavigateHome(): void {
    this.router.navigate(['/recipes']);
  }
}
