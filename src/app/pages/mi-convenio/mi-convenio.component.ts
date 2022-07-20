import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ChartData } from 'chart.js';
import { Subscription } from 'rxjs';
import { TipoUsuario } from 'src/app/constants/users/users';
import { AmountInformationItem } from 'src/app/models/total-rendicion.model';
import { AppState } from 'src/app/store/app.reducers';
import { getUser } from 'src/app/store/selectors/auth/auth.selector';
import * as agreementsActions from 'src/app/store/actions/agreements/agreements.actions'
import { ProjectWorkflowTypes } from 'src/app/constants/enums/agreements.enum';
import { getAgreementDataRenditions } from '../../store/selectors/agreement/agreement.selector';

@Component({
  selector: 'app-mi-convenio',
  templateUrl: './mi-convenio.component.html',
  styleUrls: ['./mi-convenio.component.scss']
})
export class MiConvenioComponent implements OnInit, OnDestroy {
  public datasourceTotal: number = 0;
  public title: string = 'Mis Convenios';
  public icon: string = 'file-contract';
  public titleColor: string = 'violet';
  public doughnutChartLabels: string[] = [ProjectWorkflowTypes.Gestion, ProjectWorkflowTypes.Mop, ProjectWorkflowTypes.Organismo, ProjectWorkflowTypes.Protocolizado];
  public filter = {
    page: 0,
    pageSize: 50,
    orderBy: '',
    orderDescending: false,
    id: '',
    provinces: [],
    departments: [],
    municipalities: [],
    beneficiaryOrganismId: ''
  }
  public doughnutChartData!: ChartData<'doughnut'>;
  public totalAlerts: AmountInformationItem[] = [
    {
      icon: 'eye',
      title: 'Alertas',
      amount: 2,
      type: 'text'
    }
  ]
  private auth$: Subscription | undefined;
  private agreements$: Subscription | undefined;
  private renditions$: Subscription | undefined;

  constructor(private router: Router, private readonly store: Store<AppState>) { }

  ngOnInit(): void {
    this.FetchUsers();
    this.agreements$ = this.store.select('agreements').subscribe((state) => {
      if (state.agreements && state.agreements.length) {
        this.datasourceTotal = state.totalCounts;
      }
    });
    this.renditions$ = this.store.pipe(select(getAgreementDataRenditions)).subscribe(r => {
      if (r) {
        this.doughnutChartData = {
          labels: this.doughnutChartLabels,
          datasets: [
            {
              data: r.levels,
              backgroundColor: [
                'rgb(233, 230, 242)',
                'rgb(211, 205, 229)',
                'rgb(178, 168, 209)',
                'rgb(146, 131, 190)'
              ],
              hoverBackgroundColor: [
                'rgba(233, 230, 242,0.8)',
                'rgba(211, 205, 229,0.8)',
                'rgba(178, 168, 209,0.8)',
                'rgba(146, 131, 190,0.8)'
              ]
            },
          ],
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.auth$?.unsubscribe();
    this.agreements$?.unsubscribe();
  }


  public changeDetailMode(id: number) {
    this.router.navigate([`/pages/mis-convenios/detalle/${id}`]);
  }


  private FetchUsers() {
    this.auth$ = this.store.select(getUser).subscribe((user) => {
      if (user?.userType === TipoUsuario.Governmental) {
        console.log('usuario Guvermental');
      } else {
        console.log('usuario privado');
      }
      if (user) {
        // Llamo los convenios de todos para armar el grafico de "Rendiciones"
        this.filter.beneficiaryOrganismId = user.organismId ? user.organismId : '';
        this.store.dispatch(agreementsActions.getAllAgreements({ filters: this.filter }));
        // Llamo los convenios por pagina
        this.store.dispatch(agreementsActions.getSearchAgreements({ filters: this.filter }));
      }
    });
  }


}
