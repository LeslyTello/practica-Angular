import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  url="https://api.github.com/users/mosh-hamedani/followers"
  constructor(private http:HttpClient) {
    
   }

   getFollowers():Observable<any>{

    return this.http.get(this.url)
   }
  }
