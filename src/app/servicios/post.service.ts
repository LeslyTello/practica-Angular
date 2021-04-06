import { HttpClient } from '@angular/common/http';
import { utf8Encode } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url='https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient){

   }

   getPosts(){
     return this.http.get(this.url)
   }

   postDatos(datos){
     return this.http.post(this.url,datos)
   }

   deletePost(id){
     return this.http.delete(this.url,id)
   }

   putPost(id, data){
    return this.http.post(this.url+id,data)
   }
}
