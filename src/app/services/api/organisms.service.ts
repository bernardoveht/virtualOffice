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



  public getOrganismsSearch(filter:OrganismsFilter) :  Observable<Organisms>{
    
    const header = {
      'x-api-key':'abcdefg',
      'Content-Type':'application/json'
    };
    return this.http.get<Organisms>(`${apiUri.organisms}/organisms/${filter.id}`,{headers : new HttpHeaders(header)});
 
  } 



}
