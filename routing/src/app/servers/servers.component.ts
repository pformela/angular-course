import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { IServer } from './server.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: IServer[] = [];

  public constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public onReload(): void {
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }

  public ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }
}
