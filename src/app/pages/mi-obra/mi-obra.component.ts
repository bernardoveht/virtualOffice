import { Component, OnInit } from '@angular/core';
import { TotalRendicionItem } from 'src/app/models/total-rendicion.model';

@Component({
  selector: 'app-mi-obra',
  templateUrl: './mi-obra.component.html',
  styleUrls: ['./mi-obra.component.scss']
})
export class MiObraComponent implements OnInit {

  public title:string = "Mis Obras";
  public icon:string = "truck";
  public titleColor:string = "green";
  public detailModeId:number = 0;
  public itemsTotal:TotalRendicionItem[] = [
    {
      icon:'sack-dollar',
      title:'Monto Total',
      amount:7500,
      type:'money',
    },
    {
      icon:'file-invoice-dollar',
      title:'Monto rendido acumulado',
      amount:325,
      type:'money'
    },
    {
      icon:'file-lines',
      title:'Porcentaje rendido acumulado',
      amount:46.9,
      type:'percentage'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public changeDetailMode(id:number){
    this.detailModeId = id;
  }

  public backStep(){
    this.detailModeId = 0;
  }

}
