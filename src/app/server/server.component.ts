import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IServer } from '../iserver';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  @Input() public server: IServer;

  @Output() public statusChanged = new EventEmitter<IServer>();

  public constructor(
      private route: ActivatedRoute,
      private serversSvc: ServersService
    ) { }

  public ngOnInit():void {

    this.route.paramMap.subscribe(params=>{
      console.log(params.get('serverId'));
      const server = this.serversSvc.get(+params.get('serverId'));
      console.log(server);
       if(server) {
         this.server = server;  
       }
    });

  }

  public onToggleStatus():void {
    this.server = {
      ...this.server,
      status: this.server.status==='offline'?'online':'offline'
    };
    this.statusChanged.emit(this.server);
  }

}
