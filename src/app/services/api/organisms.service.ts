import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUri } from 'src/app/constants/urls/api-url';
import { Organisms, OrganismsFilter } from 'src/app/models/organisms';

@Injectable({
  providedIn: 'root'
})
export class OrganismsService {

  constructor(private readonly http: HttpClient) { }



  public getOrganismsSearch(filter:OrganismsFilter) :  Observable<Organisms[]>{

    const token = sessionStorage.getItem('token');

    const header = {
      'Authorization':'Bearer '+ token,
      'x-api-key':'abcdefg',
      'Content-Type':'application/json'
    };
    return this.http.post<Organisms[]>(apiUri.organisms + '/organisms/list',
      [filter.id],
      {headers : new HttpHeaders(header)});    
  } 



}
