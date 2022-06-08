import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUri } from 'src/app/constants/urls/api-url';
import { Projects, ProjectsFilter } from 'src/app/models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private readonly http: HttpClient) { }


  public getProjectsAll() :  Observable<Projects[]>{
    const token = sessionStorage.getItem('token');

    const header = {
      'Authorization':'Bearer '+ token,
      'x-api-key':'abcdefg',
    };
    return this.http.get<Projects[]>( apiUri.projects + '/projects/all',{headers: new HttpHeaders(header)});
  } 
  public getProjectsSearch(filter:ProjectsFilter) :  Observable<any>{

    const token = sessionStorage.getItem('token');

    const header = {
      'Authorization':'Bearer '+ token,
      'x-api-key':'abcdefg',
    };
    return this.http.post(apiUri.projects + '/projects/search',
      filter,
      {headers : new HttpHeaders(header)});    
  } 




}
function body<T>(arg0: string, body: any, filter: ProjectsFilter, arg3: { headers: HttpHeaders; }): Observable<Projects[]> {
  throw new Error('Function not implemented.');
}

