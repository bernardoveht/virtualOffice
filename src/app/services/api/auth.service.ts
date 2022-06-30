import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User, UserAuth } from 'src/app/models/users.model';
import { Observable } from 'rxjs';
import { apiUri } from 'src/app/constants/urls/api-url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private readonly http: HttpClient) { }


  public login(username:string,password:string) : Observable<UserAuth>{
    let body: URLSearchParams = new URLSearchParams()
        body.set('scope', String('offline_access profile roles'));        
        body.set('grant_type', String('password'));
        body.set('username', String(username));
        body.set('password', String(password));
        body.set('resource', String('sippe_api snop_sippe_go_api'));

    return this.http.post<UserAuth>(apiUri.login + '/token',
      body,
      {headers : new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })});
  }
  public userInfo(token:string) :  Observable<User>{
    return this.http.get<User>( apiUri.login + '/userinfo',{headers: new HttpHeaders({'Authorization':'Bearer '+ token})});
  } 

}
