import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { R3ResolvedDependencyType } from '@angular/compiler';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {


  private url='https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { 
   
  }

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe(response=>{
      console.log(response)
    });
  }

}
