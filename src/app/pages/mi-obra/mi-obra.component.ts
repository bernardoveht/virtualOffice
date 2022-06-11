import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TotalRendicionItem } from 'src/app/models/total-rendicion.model';
import { AppState } from 'src/app/store/app.reducers';
import * as worksActions from 'src/app/store/actions/works/works.actions';
import { getWorksDataResume } from 'src/app/store/selectors/works/works.selector';

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
  public itemsTotal: TotalRendicionItem[] = [];
  private works$:Subscription | undefined;


  constructor(private readonly store:Store<AppState>) { }

  ngOnInit(): void {
    this.fetchWorks();
  }
  ngOnDestroy(): void {
    this.works$?.unsubscribe();
  }

  public changeDetailMode(id:number){
    this.detailModeId = id;
  }

  public backStep(){
    this.detailModeId = 0;
  }

  private fetchWorks(){
    this.store.dispatch(worksActions.getAllWorks());

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
