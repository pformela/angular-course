import { Component } from '@angular/core';
import { Server } from './shared/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public serverElements: Server[] = [];

  onServerAdded(serverData: Server) {
    this.serverElements.push(serverData);
  }

  onBlueprintAdded(serverData: Server) {
    this.serverElements.push(serverData);
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
