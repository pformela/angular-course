import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  public serverElements: Server[] = [];
  // public newServerName: string = '';
  // public newServerContent: string = '';
  @Output() public serverCreated = new EventEmitter<Server>();
  @Output() public blueprintCreated = new EventEmitter<Server>();
  @ViewChild('serverContent', { static: true })
  public serverContent: ElementRef = new ElementRef('');

  onServerAdded(serverName: HTMLInputElement) {
    this.serverCreated.emit(
      new Server(
        'server',
        serverName.value,
        this.serverContent.nativeElement.value
      )
    );
  }

  onBlueprintAdded(serverName: HTMLInputElement) {
    this.serverCreated.emit(
      new Server(
        'blueprint',
        serverName.value,
        this.serverContent.nativeElement.value
      )
    );
  }
}
