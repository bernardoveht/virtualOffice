import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUri } from 'src/app/constants/urls/api-url';
import { FinancialAdvancesFilter, Works, WorksAllPaginator, WorksFilter } from 'src/app/models/works.model';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private readonly http: HttpClient) { }

  public getWorksAll() :  Observable<Works[]>{
    const params = new HttpParams()
      .set('page', 0)
      .set('pageSize', 50);

    return this.http.get<Works[]>( apiUri.works + '/works/all');
  } 

  public getWorksSearch(filter:WorksFilter) :  Observable<WorksAllPaginator>{    
    return this.http.post<WorksAllPaginator>(apiUri.works + '/works/search',
      filter);    
  } 
  public getFinancialAdvancesSearch(filter:FinancialAdvancesFilter) :  Observable<any>{
    return this.http.post<any>(`${apiUri.works}/works/expenses/search`,
      filter);    
  } 
  public getExpensesSearch(filter:FinancialAdvancesFilter) :  Observable<any>{
    return this.http.post<any>(`${apiUri.works}/works/expenses/search`,
      filter);    
  } 
  




}
