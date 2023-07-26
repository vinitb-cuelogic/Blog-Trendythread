import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  signUp(data:any):Observable<any> {
    return this.httpClient.post("http://localhost:8080/api/auth/signup", data);
  }

  login(data:any):Observable<any> {
    return this.httpClient.post("http://localhost:8080/api/auth/login", data);
  }

}
