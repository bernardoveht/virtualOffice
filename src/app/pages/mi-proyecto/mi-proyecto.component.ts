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
import { getProjectDataResume } from 'src/app/store/selectors/project/project.selector';

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
  public doughnutChartLabels: string[] = ['Borrador', 'Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4','Nivel 5','Aprobado'];
  public doughnutChartData: ChartData<'doughnut'> | undefined;
  public itemsTotal: TotalRendicionItem[] = [];
  public totalProjects = 0;
  
  private auth$:Subscription | undefined;
  private projects$:Subscription | undefined;

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit(): void {    

    this.FetchUsers();
    this.FetchProjects();
    
  }
  ngOnDestroy(): void {
    this.auth$?.unsubscribe();
    this.projects$?.unsubscribe();
  }

  public changeDetailMode(id: number) {
    this.detailModeId = id;
  }

  public backStep() {
    this.detailModeId = 0;
  }
  private FetchUsers(){
    this.auth$ = this.store.select(getUser).subscribe((user) =>{
      if(user?.userType === TipoUsuario.Governmental){
        console.log('usuario Guvermental');
      } else {
        console.log('usuario privado');
      }
      if(user){

        const filto:ProjectsFilter = {
          provinces: user.provinceId ?[user.provinceId]: [],
          page: 0,
          pageSize: 100000,
          orderBy: '',
          orderDescending: false,
          id: '',
          bapinCode: '',
          name: '',
          portfolioId: null,
          departments: [],
          municipalities: user.municipalityId ?[user.municipalityId] : [],
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
        this.store.dispatch(projectActions.getSearchProjects({filters:filto}));
        // this.store.dispatch(projectActions.getAllProjects());      
      }
   
    });
  }
  private FetchProjects(){
    this.projects$ = this.store.select(getProjectDataResume).subscribe((result)=>{
    
      this.doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [
          {
            data: result.levels,
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
      this.totalProjects = result.totalProject;
      this.itemsTotal = [
        {
          icon: 'sack-dollar',
          title: 'Monto Total',
          amount: result.totalAmount,
          type:'money'
        },
      ];

    });
  }


}
