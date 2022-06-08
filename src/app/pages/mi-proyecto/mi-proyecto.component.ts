import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as projectActions from 'src/app/store/actions/projects/projects.actions'
import { TotalRendicionItem } from 'src/app/models/total-rendicion.model';
import { ChartData } from 'chart.js';
import { Observable, Subscription } from 'rxjs';
import { getUser } from 'src/app/store/selectors/auth/auth.selector';
import { ProjectsFilter } from 'src/app/models/projects.model';
import { TipoUsuario } from 'src/app/constants/users/users';

@Component({
  selector: 'app-mi-proyecto',
  templateUrl: './mi-proyecto.component.html',
  styleUrls: ['./mi-proyecto.component.scss']
})
export class MiProyectoComponent implements OnInit,OnDestroy {
  public title: string = "Mis Proyectos";
  public icon: string = "file-invoice-dollar";
  public titleColor: string = "orange";
  public detailModeId: number = 0;
  public doughnutChartLabels: string[] = ['Iniciadas', 'En Observación', 'Adjudicada', 'Rechazadas', 'Contratadas'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [5, 8, 7, 10, 16],
        backgroundColor: [
          'rgb(253, 234, 211)',
          'rgb(255, 211, 159)',
          'rgb(248, 190, 122)',
          'rgb(250, 180, 99)',
          'rgb(248, 161, 59)'
        ],
        hoverBackgroundColor: [
          'rgba(253, 234, 211,0.8)',
          'rgba(255, 211, 159,0.8)',
          'rgba(248, 190, 122,0.8)',
          'rgba(250, 180, 99,0.8)',
          'rgba(248, 161, 59,0.8)'
        ]
      },
    ],


  };
  public itemsTotal: TotalRendicionItem[] = [
    {
      icon: 'sack-dollar',
      title: 'Monto Total',
      amount: 7500,
      type:'money'
    },
  ]
  
  private auth$:Subscription | undefined;

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit(): void {    

    this.auth$ = this.store.select(getUser).subscribe((user) =>{
      if(user?.userType === TipoUsuario.Governmental){
        console.log('usuario Guvermental');
      } else {
        console.log('usuario privado');
      }
      if(user){
        const filto:ProjectsFilter = {
          provinces: [user?.provinceId[0]!],
          page: 0,
          pageSize: 1000,
          orderBy: '',
          orderDescendin: false,
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
          beneficiaryOrganismId: '',
          externalCreditOrganisms: [],
          loanId: '',
          developmentState: null,
          workflowStepStatuses: [],
          haveLocations: false,
          isEmergency: false,
          lastUpdateTo: '',
          geoJsonLayerId: '',
          geoJsonFeatureCollection: ''
        };
        console.log('..........fil',filto);
        this.store.dispatch(projectActions.getSearchProjects({filters:filto}));
        // this.store.dispatch(projectActions.getAllProjects());      
      }
   
    });
    
  }
  ngOnDestroy(): void {
    this.auth$?.unsubscribe();
  }

  public changeDetailMode(id: number) {
    this.detailModeId = id;
  }

  public backStep() {
    this.detailModeId = 0;
  }


}
