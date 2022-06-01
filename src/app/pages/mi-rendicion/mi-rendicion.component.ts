import { Component, OnInit } from '@angular/core';
import { TotalRendicionItem } from 'src/app/models/total-dendicion.model';

@Component({
  selector: 'app-mi-rendicion',
  templateUrl: './mi-rendicion.component.html',
  styleUrls: ['./mi-rendicion.component.scss']
})
export class MiRendicionComponent implements OnInit {

  public title:string = "Mis rendiciones";
  public icon:string = "file-invoice-dollar";
  public titleColor:string = "green-light";
  public detailModeId:number = 0;

  public itemsTotal:TotalRendicionItem[] = [
    {
      icon:'sack-dollar',
      title:'Desembolso acumulado',
      amount:7500
    },
    {
      icon:'file-invoice-dollar',
      title:'Monto rendido acumulado',
      amount:3525
    },
    {
      icon:'file-invoice-dollar',
      title:'Porcentaje rendido acumulado',
      amount:469
    }
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
