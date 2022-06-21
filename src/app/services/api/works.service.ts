import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUri } from 'src/app/constants/urls/api-url';
import { Works, WorksAllPaginator, WorksFilter } from 'src/app/models/works.model';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private readonly http: HttpClient) { }



  public getWorksAll() :  Observable<Works[]>{
    const token = sessionStorage.getItem('token');

    const header = {
      'Authorization':'Bearer '+ token,
      'x-api-key':'abcdefg',
    };
    const params = new HttpParams()
      .set('page', 0)
      .set('pageSize', 50);

    return this.http.get<Works[]>( apiUri.works + '/works/all',{headers: new HttpHeaders(header),params: params});
  } 

  public getWorksSearch(filter:WorksFilter) :  Observable<WorksAllPaginator>{

    const token = sessionStorage.getItem('token');

    const header = {
      'Authorization':'Bearer '+ token,
      'x-api-key':'abcdefg',
      'Content-Type':'application/json'
    };
    
    return this.http.post<WorksAllPaginator>(apiUri.works + '/works/search',
      filter,
      {headers : new HttpHeaders(header)});    
  } 




}
