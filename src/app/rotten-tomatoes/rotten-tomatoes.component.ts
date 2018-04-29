import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-rotten-tomatoes',
  templateUrl: './rotten-tomatoes.component.html',
  styleUrls: ['./rotten-tomatoes.component.css']
})
export class RottenTomatoesComponent implements OnInit {

  private apiurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=58761096';
  data: any = {};

  constructor(private http: Http) {
    this.getContent();
    this.getData();
   }

  ngOnInit() {
  }

  getData(){
    return this.http.get(this.apiurl)
      .map((res: Response) => res.json())
  }

  getContent(){
    this.getData().subscribe(data => {

      this.data = data;
      console.log(this.data);
    })
  }

}
