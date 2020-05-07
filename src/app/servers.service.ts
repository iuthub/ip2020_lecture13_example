import { Injectable, EventEmitter } from '@angular/core';
import { IServer } from './iserver';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  public servers:IServer[]=[];
  public serversChanged = new EventEmitter<IServer[]>();


  constructor() { }


  public add(name:string, status: string):void {
  	const server = {
  		id: this.getCurrentId(), 
  		name: name,
  		status: status,
  		createDate: new Date(),
  	}

  	this.servers =  [
  		...this.servers,
  		server,
  	]
  	this.serversChanged.emit(this.servers);
  }

  public remove(id:number):void {
  	this.servers = this.servers.filter(x=>x.id!==id);
  	this.serversChanged.emit(this.servers);	
  }

  private getCurrentId():number {
  	return this.servers.length + 1;
  }

  public get(id:number):IServer {
  	console.log(this.servers);
  	return this.servers.find(x => x.id==id);
  }

}
