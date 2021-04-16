import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { R3ResolvedDependencyType } from '@angular/compiler';
import { PostService } from '../servicios/post.service';
import { error } from 'selenium-webdriver';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {


  private url='https://jsonplaceholder.typicode.com/posts'

  constructor(private service:PostService) { 
   
  }

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(response=>{
      console.log(response)
    },error=>{
      alert('An unexpected error occured')
      console.log(error)
    });
  }

  
  deletePost(post){

    this.service.deletePost(post.id)
    .subscribe(response=>{
      console.log(response)
    },(error:Response)=>{

      if( error instanceof BadInput)
      return 'Error de Bad Input'
      if(error.status===404)
      alert('Esto es un error de no found. El post has aready been deleted')
      else
      alert('An unpected error ocurred')
      console.log(error)
    })
  }

}
