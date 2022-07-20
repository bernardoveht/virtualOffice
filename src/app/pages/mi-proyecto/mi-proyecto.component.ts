import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as projectActions from 'src/app/store/actions/projects/projects.actions'
import { AmountInformationItem } from 'src/app/models/total-rendicion.model';
import { ChartData } from 'chart.js';
import { Subscription } from 'rxjs';
import { getUser } from 'src/app/store/selectors/auth/auth.selector';
import { ProjectDetails, ProjectsFilter } from 'src/app/models/projects.model';
import { TipoUsuario } from 'src/app/constants/users/users';
import { getProjectDataResume } from 'src/app/store/selectors/project/project.selector';
import { ProyectoModalCardComponent } from './components/proyecto-modal-card/proyecto-modal-card.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyectoModalDetailComponent } from './components/proyecto-modal-detail/proyecto-modal-detail.component';
import { ProjectWorkflowStatuses } from 'src/app/constants/enums/project.enum';


@Component({
  selector: 'app-mi-proyecto',
  templateUrl: './mi-proyecto.component.html',
  styleUrls: ['./mi-proyecto.component.scss']
})
export class MiProyectoComponent implements OnInit, OnDestroy {
  public title: string = "Mis Proyectos";
  public icon: string = "file-invoice-dollar";
  public titleColor: string = "green-medium";
  public doughnutChartLabels: string[] = ['Borrador', 'Observado', 'En gestion', 'Aprobado'];
  public doughnutChartData: ChartData<'doughnut'> | undefined;
  public itemsTotal: AmountInformationItem[] = [];
  public totalProjects = 0;
  public totalAlerts: AmountInformationItem[] = [];
  public filter: ProjectsFilter = {
    provinces: [],
    page: 0,
    pageSize: 50,
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

  private auth$: Subscription | undefined;
  private projects$: Subscription | undefined;

  constructor(
    private readonly store: Store<AppState>,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.FetchUsers();
    this.FetchProjects();
  }
  ngOnDestroy(): void {
    this.auth$?.unsubscribe();
    this.projects$?.unsubscribe();
  }


  private FetchUsers() {
    this.auth$ = this.store.select(getUser).subscribe((user) => {
      if (user?.userType === TipoUsuario.Governmental) {
        console.log('usuario Guvermental');
      } else {
        console.log('usuario privado');
      }
      if (user) {
        this.filter.beneficiaryOrganismId = user.organismId ? user.organismId : '';
        this.store.dispatch(projectActions.getSearchProjects({ filters: this.filter }));
        // this.store.dispatch(projectActions.getAllProjects());      
      }
    });
  }
  private FetchProjects() {
    this.projects$ = this.store.select(getProjectDataResume).subscribe((result) => {
      this.doughnutChartData = {
        labels: this.doughnutChartLabels,
        datasets: [
          {
            data: result.levels,
            backgroundColor: [
              'rgb(174, 194, 181)',
              'rgb(160, 206, 176)',
              'rgb(140, 209, 164)',
              'rgb(79, 187, 115)',
            ],
            hoverBackgroundColor: [
              'rgba(174, 194, 181,0.8)',
              'rgba(160, 206, 176,0.8)',
              'rgba(140, 209, 164,0.8)',
              'rgba(79, 187, 115,0.8)',
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
          type: 'money'
        },
      ];
      this.totalAlerts = [
        {
          icon: 'eye',
          title: 'Alertas',
          amount: result.totalObserver,
          type: 'text'
        }
      ]

    });
  }

  public handleDetails(project: any) {
    const modalRef = this.modalService.open(ProyectoModalDetailComponent, {
      windowClass: 'modal-green-medium',
      size: 'lg',
      centered: true
    });
    modalRef.componentInstance.color = 'green-medium';
    modalRef.componentInstance.title = 'Proyecto';
    modalRef.componentInstance.icon = this.icon;
    modalRef.componentInstance.data = {
      project
    };
  }
}
