import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyblogsService {

  // user:any;
  constructor(private httpClient:HttpClient) { }
  
  user = JSON.parse(localStorage.getItem("user"));

  getPosts():Observable<any>{
    return this.httpClient.get("http://localhost:8080/api/post/byUser/"+this.user.username);
  }

}
