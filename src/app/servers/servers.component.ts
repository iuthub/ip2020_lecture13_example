// ng g c servers

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IServer } from '../iserver';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  public newServerName:string='';
  public newServerStatus:string='offline';

  public servers:IServer[]=[
  	{
  		id: 1,
  		name: 'US Server',
  		status:'online'
  	}
  ];

  public constructor() { }

  public ngOnInit():void {

  	// to initilize your component properties including ajax requests

  	console.log('initializing server component');
  }

  public onAddNewServer():void {
  	let lastId = this.servers.length + 1;
  	this.servers = [
  		...this.servers,
  		{
  			id: lastId,
  			name: this.newServerName,
  			status: this.newServerStatus
  		}
  	]
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
