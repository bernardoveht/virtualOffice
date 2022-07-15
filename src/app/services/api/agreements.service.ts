import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUri } from 'src/app/constants/urls/api-url';
import { Agreements, AgreementsAllPaginator } from 'src/app/models/agreements.model';
import { AgreementsFilter } from '../../models/agreements.model';

@Injectable({
  providedIn: 'root'
})
export class AgreementsService {


  constructor(private readonly http: HttpClient) { }

  public getAgreementsAll(): Observable<Agreements[]> {
    return this.http.get<Agreements[]>(apiUri.agreements + '/agreements/all');
  }

  public getAgreementsSearch(filter: AgreementsFilter): Observable<AgreementsAllPaginator> {
    return this.http.post<AgreementsAllPaginator>(apiUri.agreements + '/agreements/search',
      filter
    );
  }

}
