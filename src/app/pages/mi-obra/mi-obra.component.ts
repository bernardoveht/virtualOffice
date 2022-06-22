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

@Component({
  selector: 'app-mi-obra',
  templateUrl: './mi-obra.component.html',
  styleUrls: ['./mi-obra.component.scss']
})
export class MiObraComponent implements OnInit ,OnDestroy{

  public title:string = "Mis Obras";
  public icon:string = "truck";
  public titleColor:string = "green";
  public detailModeId:number = 0;
  public itemsTotal: AmountInformationItem[] = [];

  public filter:WorksFilter = {
    page: 0,
    pageSize: 50,
    orderBy: 'id',
    orderDescending: true,
    id: '',
    provinces: [],
    departments: [],
    municipalities: []
  };

  private works$:Subscription | undefined;
  private auth$:Subscription | undefined;


  constructor(private readonly store:Store<AppState>) { }

  ngOnInit(): void {
      this.fetchUser();
      this.fetchWorks();
  }
  ngOnDestroy(): void {
    this.works$?.unsubscribe();
    this.auth$?.unsubscribe();
  }

  public changeDetailMode(id:number){
    this.detailModeId = id;
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
        this.filter.provinces = user.provinceId ?[user.provinceId]: [];
        this.filter.municipalities = user.municipalityId ?[user.municipalityId] : [];
        this.store.dispatch(worksActions.getSearchWorks({filter:this.filter}));
   
      }
   
    });
  }
  private fetchWorks(){
    this.works$ = this.store.select(getWorksDataResume).subscribe((value)=>{
      if(value) {
        this.itemsTotal = [
          {
            icon:'sack-dollar',
            title:'Monto Total',
            amount:value.totalCost,
            type:'money',
          },
          {
            icon:'file-invoice-dollar',
            title:'Monto rendido acumulado',
            amount:value.totalWorks,
            type:'money'
          },
          {
            icon:'file-lines',
            title:'Porcentaje rendido acumulado',
            amount:value.updatedAmount,
            type:'percentage'
          },
        ];
      }
    });
  }

}
