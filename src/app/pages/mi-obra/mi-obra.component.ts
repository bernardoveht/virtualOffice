import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AmountInformationItem } from 'src/app/models/total-rendicion.model';
import { AppState } from 'src/app/store/app.reducers';
import * as worksActions from 'src/app/store/actions/works/works.actions';
import { getWorksDataResume } from 'src/app/store/selectors/works/works.selector';
import { getUser } from 'src/app/store/selectors/auth/auth.selector';
import { TipoUsuario } from 'src/app/constants/users/users';
import { WorksFilter } from 'src/app/models/works.model';
import { ChartData } from 'chart.js';
import { Router } from '@angular/router';
import { WorkSteps } from 'src/app/constants/enums/work.enum';

@Component({
  selector: 'app-mi-obra',
  templateUrl: './mi-obra.component.html',
  styleUrls: ['./mi-obra.component.scss']
})
export class MiObraComponent implements OnInit ,OnDestroy{

  public title:string = "Mis Obras";
  public icon:string = "truck";
  public titleColor:string = 'green';
  public detailModeId:number = 0;
  public datasourceTotal:number = 0;
  public itemsTotal: AmountInformationItem[] = [];
  public totalAlerts:AmountInformationItem[] = []
  public doughnutChartLabels: string[] = [WorkSteps[3],WorkSteps[1],WorkSteps[2]];
  public doughnutChartData!: ChartData<'doughnut'>;

  public filter:WorksFilter = {
    page: 0,
    pageSize: 50,
    orderBy: 'id',
    orderDescending: true,
    id: '',
    provinces: [],
    departments: [],
    municipalities: [],
    beneficiaryOrganismId:''
  };

  private works$:Subscription | undefined;
  private auth$:Subscription | undefined;


  constructor(private readonly store:Store<AppState>,private router:Router) { }

  ngOnInit(): void {
      this.fetchUser();
      this.fetchWorks();
  }
  ngOnDestroy(): void {
    this.works$?.unsubscribe();
    this.auth$?.unsubscribe();
  }

  public changeDetailMode(id:number){
    this.router.navigate([`/pages/mis-obras/detalle/${id}`]);
  }

  public backStep(){
    this.detailModeId = 0;
  }

  private fetchUser(){
    this.auth$ = this.store.select(getUser).subscribe((user) =>{
      if(user?.userType === TipoUsuario.Governmental){
        console.log('usuario Guvermental');
      } else {
        console.log('usuario privado');
      }
      if(user){
        this.filter.beneficiaryOrganismId = user.organismId ? user.organismId : '';
        this.store.dispatch(worksActions.getSearchWorks({filter:this.filter}));   
      }
   
    });
  }
  private fetchWorks(){
    this.works$ = this.store.select(getWorksDataResume).subscribe((value)=>{
      if(value) {
        this.doughnutChartData ={
          labels: this.doughnutChartLabels,
          datasets: [
            {
              data: value.levels,
              backgroundColor: [
                'rgb(220, 241, 239)',
                'rgb(185, 226, 224)',
                'rgb(132, 205, 200)',
                'rgb(80, 184, 177)'
              ],
              hoverBackgroundColor: [
                'rgba(220, 241, 239,0.8)',
                'rgba(185, 226, 224,0.8)',
                'rgba(132, 205, 200,0.8)',
                'rgba(80, 184, 177,0.8)'
              ]
            },
          ],
        };
        this.datasourceTotal = value.totalWorks ?? 0;
        this.itemsTotal = [
          {
            icon:'sack-dollar',
            title:'Monto Total Vigente',
            amount:value.totalCost,
            type:'money',
          },
        ];
        this.totalAlerts = [
          {
            icon: 'eye',
            title: 'Alertas',
            amount: 3,
            type: 'text'
          }
        ]
      }
    });
  }

}
