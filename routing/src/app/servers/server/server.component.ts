import { Component, OnDestroy, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { IServer } from '../server.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit, OnDestroy {
  public server: IServer = { id: 0, name: '', status: '' };
  private paramsSubscription: Subscription = new Subscription();

  public constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    // this.server = this.serversService.getServer(1);

    // this.paramsSubscription = this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }

  public ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  public onEdit(): void {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
