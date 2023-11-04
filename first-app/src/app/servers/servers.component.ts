import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  public newServerName: string = '';
  public allowNewServer: boolean = false;
  public serverCreationStatus: string = 'No server was created!';
  public serverCreated: boolean = false;
  public servers: string[] = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  public onCreateServer(): void {
    this.serverCreationStatus = `Server was created! New name is ${this.newServerName}`;
    this.servers.push(this.newServerName);
    this.serverCreated = true;
  }

  public onUpdateServerName(event: Event): void {
    this.newServerName = (<HTMLInputElement>event.target).value;
  }
}
