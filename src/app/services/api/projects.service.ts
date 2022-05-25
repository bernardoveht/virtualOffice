import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUri } from 'src/app/constants/urls/api-url';
import { Projects } from 'src/app/models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private readonly http: HttpClient) { }


  public getProjectsAll() :  Observable<Projects[]>{
    const token = sessionStorage.getItem('token');
    return this.http.get<Projects[]>( apiUri.projects + '/projects/all',{headers: new HttpHeaders({'Authorization':'Bearer '+ token,'x-api-key':'abcdefg'})});
  } 

}
