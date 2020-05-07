import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './server/server.component';
import {DictionaryComponent} from './dictionary/dictionary.component';


const routes: Routes = [
	{path: 'servers', component: ServersComponent},
	{path: 'dictionary', component: DictionaryComponent},
	{path: 'servers/:serverId', component: ServerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
