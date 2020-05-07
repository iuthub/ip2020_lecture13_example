// ng g c servers

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IServer } from '../iserver';
import { ServersService } from '../servers.service';
import { CockpitComponent } from '../cockpit/cockpit.component';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit, AfterViewInit {

  @ViewChild('cockpit', {static: false}) public cockpit:CockpitComponent;

  public servers:IServer[];

  public constructor(private serversSvc: ServersService) { }

  public ngOnInit():void {

  	// to initilize your component properties including ajax requests
  	console.log('initializing server component');
    this.servers = this.serversSvc.servers;
    this.serversSvc.serversChanged.subscribe(servers=>{
      this.servers = servers;
    });
  }

  public ngAfterViewInit() {
     // this.cockpit.currentId = this.servers.length + 1;
  }

  public onStatusChanged(server:IServer):void {
    console.log(server);
  }


  // public onServerNameInput(val:string):void {
  // 	this.newServerName = val;
  // }

  // public onServerNameChange(val:string):void {
  // 	this.newServerStatus = val;
  // }

}
