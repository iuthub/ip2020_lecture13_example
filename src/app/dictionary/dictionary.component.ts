import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  public searchWord:string = 'hey';
  public descriptions: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSearch():void {
  		// let searchWord = this.searchWord;
  		// let resp:any = await this.http.get(`http://api.urbandictionary.com/v0/define?term=${searchWord}`).toPromise();

  		// console.log(resp);
  		// this.descriptions = resp.list.map(x=>x.definition);

  		this.http.get(`http://api.urbandictionary.com/v0/define?term=${this.searchWord}`).subscribe((resp:any)=>{
  			this.descriptions = resp.list.map(x=>x.definition);	
  		});
  }		
}
