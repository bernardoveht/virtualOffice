import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from 'src/app/models/users.model';
import { Observable } from 'rxjs';
import { apiUri } from 'src/app/constants/urls/api-url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private readonly http: HttpClient) { }


  public login(username:string,password:string) : Observable<User>{
    let body: URLSearchParams = new URLSearchParams()
        body.set('scope', String('offline_access profile roles'));        
        body.set('grant_type', String('password'));
        body.set('username', String(username));
        body.set('password', String(password));
        body.set('resource', String('sippe_api'));

    return this.http.post<User>(apiUri.login + '/token',
      body,
      {headers : new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })});
  }

}
