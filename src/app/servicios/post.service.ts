import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';


@Injectable()
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
     return this.http.delete(this.url+'/'+id)
    
   }

   putPost(id, data){
    return this.http.post(this.url+id,data)
    
   }
}

/*
HANDLING ERRORS

UNEXPECTED
- Server if oofline
- network is down
- unhandled exception

EXPECTED
-Not found (404)
-Bad request(400)


OBSERVABLES AND PROMISES

Trabaja con trabajo asincrono. 
Se usa observables no pasa nada y no se suscribe, no llam al background

.subscribe()

Observables -lazy y se debe usar subscribe, se puede convertir a promises
Permite programaci[on reactiva]
Promise - no tiene el subscribe



*/