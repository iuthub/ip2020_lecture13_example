import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
