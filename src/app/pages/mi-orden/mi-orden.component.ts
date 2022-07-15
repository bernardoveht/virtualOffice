import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AmountInformationItem } from 'src/app/models/total-rendicion.model';
import { WorksFilter } from 'src/app/models/works.model';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-mi-orden',
  templateUrl: './mi-orden.component.html',
  styleUrls: ['./mi-orden.component.scss']
})
export class MiOrdenComponent implements OnInit {

  public title:string = "Mis Ordenes de Pago";
  public icon:string = "hand-holding-dollar";
  public titleColor:string = "pink";
  public detailModeId:number = 0;
  public itemsTotal: AmountInformationItem[] = [];
  public totalAlerts:AmountInformationItem[] = []
  

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


  constructor(private readonly store:Store<AppState>) { }

  ngOnInit(): void {
    this.totalAlerts = [
      {
        icon: 'eye',
        title: 'Alertas',
        amount: 2,
        type:'text'
      }
    ]
    this.itemsTotal = [
      {
        icon:'sack-dollar',
        title:'Monto Total',
        amount:75000,
        type:'money',
      },
      {
        icon:'file-invoice-dollar',
        title:'Monto rendido acumulado',
        amount:3525,
        type:'money'
      },
      {
        icon:'file-lines',
        title:'Porcentaje rendido acumulado',
        amount:46.9,
        type:'percentage'
      },
    ];

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
}
