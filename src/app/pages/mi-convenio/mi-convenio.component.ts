import { Component, OnInit } from '@angular/core';
import { TotalRendicionItem } from 'src/app/models/total-rendicion.model';

@Component({
  selector: 'app-mi-convenio',
  templateUrl: './mi-convenio.component.html',
  styleUrls: ['./mi-convenio.component.scss']
})
export class MiConvenioComponent implements OnInit {

  public title:string = "Mis Convenios";
  public icon:string = "file-contract";
  public titleColor:string = "violet";
  public detailModeId:number = 0;
  public itemsTotal:TotalRendicionItem[] = [
    {
      icon:'sack-dollar',
      title:'Monto Total',
      amount:7500,
      type:'money'
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
