import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../servicios/followers.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  followers:Object

  constructor(private servicioFollowers: FollowersService, private http:HttpClient) { }

  ngOnInit(): void {
    
     this.servicioFollowers.getFollowers().subscribe(
      (respuesta)=>{
        console.log(respuesta)
        this.followers=respuesta
      })
      
     
  }





  
  


}
