import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { apiUri } from 'src/app/constants/urls/api-url';
import { ProjectAllPaginator, Projects, ProjectsFilter } from 'src/app/models/projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private readonly http: HttpClient) { }

  public getProjectsAll() :  Observable<Projects[]>{
    return this.http.get<Projects[]>( apiUri.projects + '/projects/all');
  } 
  public getProjectsSearch(filter:ProjectsFilter) :  Observable<ProjectAllPaginator>{

    return this.http.post<ProjectAllPaginator>(apiUri.projects + '/projects/search',
      filter);  
  } 
  public getProjectsSearchAll(filter:ProjectsFilter) :  Observable<ProjectAllPaginator>{


    const filterAll:ProjectsFilter = {
      provinces: [],
      page: 0,
      pageSize: 100000,
      orderBy: '',
      orderDescending: false,
      id: '',
      bapinCode: '',
      name: '',
      portfolioId: null,
      departments: [],
      municipalities: [],
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
      beneficiaryOrganismId: filter.beneficiaryOrganismId,
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

    return this.http.post<ProjectAllPaginator>(apiUri.projects + '/projects/search',
      filterAll);    
  }
  public getDetailsSubGroup(id:number): Observable<any> {
    return this.http.get(`${apiUri.projects}/worktype/SubGroup/${id}`);
  }
  public getDetailsWorkType(): Observable<any> {
    return this.http.get(`${apiUri.projects}/worktype`);
  }
  public getDetailsWorkTypeGroup(): Observable<any> {
    return this.http.get(`${apiUri.projects}/worktypegroup`);
  }
}