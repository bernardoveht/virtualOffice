import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AgreementsFilter } from 'src/app/models/agreements.model';
import { AmountInformationItem } from 'src/app/models/total-rendicion.model';
import { AppState } from 'src/app/store/app.reducers';
import { AmountInformationTitle } from '../../../../models/total-rendicion.model';
import { Agreements } from '../../../../models/agreements.model';
import * as agreementsActions from 'src/app/store/actions/agreements/agreements.actions'

@Component({
  selector: 'app-convenio-detail',
  templateUrl: './convenio-detail.component.html',
  styleUrls: ['./convenio-detail.component.scss']
})
export class ConvenioDetailComponent implements OnInit, OnDestroy {
  public filter: AgreementsFilter = {
    page: 0,
    pageSize: 1,
    orderBy: '',
    orderDescending: false,
    id: '',
    provinces: [],
    departments: [],
    municipalities: [],
    beneficiaryOrganismId: ''
  }
  public agreement!: Agreements;
  public title: string = 'Mis Convenios';
  public icon: string = 'file-contract';
  public titleColor: string = 'violet';
  private routeSb = new Subscription();
  private id!: number;
  public itemsTotal: AmountInformationItem[] = [
    {
      icon: 'sack-dollar',
      title: 'Monto del convenio',
      amount: 7500,
      type: 'money'
    },
  ]
  public datesTitle: AmountInformationTitle = {
    text: 'Fechas',
    icon: 'calendar-days'
  }
  public itemsDates: AmountInformationItem[] = [
    {
      icon: 'file-lines',
      title: 'Fecha de caratulación expediente GDE | Específico',
      amount: '10/07/2020',
      type: 'date'
    },
    {
      icon: 'file-lines',
      title: 'Fecha de firma del convenio por un organismo/ente',
      amount: '13/08/2020',
      type: 'date'
    },
    {
      icon: 'file-lines',
      title: 'Fecha de firma del convenio por el Ministerio de Obras Públicas',
      amount: '02/09/2020',
      type: 'date'
    },
    {
      icon: 'file-pen',
      title: 'Fecha de protocolización del convenio',
      amount: '15/09/2020',
      type: 'date'
    },
  ]

  constructor(private router: Router, private route: ActivatedRoute, private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.routeSb = this.route.params.subscribe((params) => {
      this.id = parseInt(params['id'], 10);
      this.filter.id = String(this.id);
      this.store.dispatch(agreementsActions.getAgreementDetail({ filters: this.filter }));
    });
  }

  ngOnDestroy(): void {
    this.routeSb.unsubscribe();
  }

  backStep() {
    this.router.navigate([`/pages/mis-convenios`]);
  }

}
