import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUri } from 'src/app/constants/urls/api-url';
import { ProjectAllPaginator, Projects, ProjectsFilter } from 'src/app/models/projects.model';

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
  public getProjectsSearch(filter:ProjectsFilter) :  Observable<ProjectAllPaginator>{

    const token = sessionStorage.getItem('token');

    const header = {
      'Authorization':'Bearer '+ token,
      'x-api-key':'abcdefg',
    };
    return this.http.post<ProjectAllPaginator>(apiUri.projects + '/projects/search',
      filter,
      {headers : new HttpHeaders(header)});    
  } 
  public getProjectsSearchAll(filter:ProjectsFilter) :  Observable<ProjectAllPaginator>{

    const token = sessionStorage.getItem('token');
    const filterAll:ProjectsFilter = {
      provinces: filter.provinces,
      page: 0,
      pageSize: 100000,
      orderBy: '',
      orderDescending: false,
      id: '',
      bapinCode: '',
      name: '',
      portfolioId: null,
      departments: [],
      municipalities: filter.municipalities,
      localities: [],
      workTypeGroupId: null,
      workTypeSubgroupId: null,
      workTypeId: null,
      workflowSteps: [],
      budgetaryProgramId: '',
      tematicAreaId: null,
      planIds: [],
      tagValues: [],
      managerUserId: '',
      organismInChargeId: '',
      beneficiaryOrganismId: '',
      externalCreditOrganisms: [],
      loanId: '',
      developmentState: null,
      workflowStepStatuses: [],
      haveLocations: true,
      isEmergency: false,
      lastUpdateTo: '',
      geoJsonLayerId: '',
      geoJsonFeatureCollection: '',
      includeArchived: false,
      lastUpdateFrom: ''
    };


    const header = {
      'Authorization':'Bearer '+ token,
      'x-api-key':'abcdefg',
    };
    return this.http.post<ProjectAllPaginator>(apiUri.projects + '/projects/search',
      filterAll,
      {headers : new HttpHeaders(header)});    
  } 
}