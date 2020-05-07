import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IServer } from '../iserver';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  @Input() public server: IServer = {
  	id:1,
  	name:'',
  	status:'offline'
  };

  @Output() public statusChanged = new EventEmitter<IServer>();

  public constructor() { }

  public ngOnInit():void {
  }

  public onToggleStatus():void {
    this.server = {
      ...this.server,
      status: this.server.status==='offline'?'online':'offline'
    };
    this.statusChanged.emit(this.server);
  }

}
