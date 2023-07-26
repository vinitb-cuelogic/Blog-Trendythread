import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  addComment(data:any):Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/comment/",data);
  }
  

}
