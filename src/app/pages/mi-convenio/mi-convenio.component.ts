import { Component, OnInit } from '@angular/core';
import { AmountInformationItem } from 'src/app/models/total-rendicion.model';

@Component({
  selector: 'app-mi-convenio',
  templateUrl: './mi-convenio.component.html',
  styleUrls: ['./mi-convenio.component.scss']
})
export class MiConvenioComponent implements OnInit {

  public title:string = 'Mis Convenios';
  public icon:string = 'file-contract';
  public titleColor:string = 'violet';
  public detailModeId:number = 0;
  public itemsTotal:AmountInformationItem[] = [
    {
      icon:'sack-dollar',
      title:'Monto Total',
      amount:7500,
      type:'money'
    },
  ]
  public totalAlerts:AmountInformationItem[] = [
    {
      icon: 'eye',
      title: 'Alertas',
      amount: 2,
      type:'text'
    }
  ]

  // hay que recibir informacion del endpoint correspondiente para saber si mostrar o no la parte de la izquierda de la grilla
  dataSourceTotal:any[] = [1,2,3,4,5,6];

  constructor() { }

  ngOnInit(): void {
  }

  public changeDetailMode(id:number){
    this.detailModeId = id;
    this.title = 'Puesta en valor de las areas centales del casco urbano Lanús'
  }

  public backStep(){
    this.detailModeId = 0;
    this.titleReset();
  }

  public titleReset(){
    this.title = 'Mis Convenios';
  }

}
