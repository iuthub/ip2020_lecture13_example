import { Component, OnInit, AfterViewInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IServer } from '../iserver';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit, AfterViewInit {
 @ViewChild('newServerTextbox', {static: false}) public newServerTextbox:ElementRef;

  
  currentId:number=0;

  newServerName:string;
  newServerStatus:string = 'online';

  // @Output() newServerCreated = new EventEmitter<IServer>();

  constructor(private serversSvc:ServersService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
  	this.newServerTextbox.nativeElement.style.backgroundColor = 'green';
  }

  onAddNewServer(){
  	this.serversSvc.add(this.newServerName, this.newServerStatus);
  }
}
