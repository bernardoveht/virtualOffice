import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-proyecto',
  templateUrl: './mi-proyecto.component.html',
  styleUrls: ['./mi-proyecto.component.scss']
})
export class MiProyectoComponent implements OnInit {
  public title:string = "Mis Proyectos";
  public icon:string = "file-invoice-dollar";
  public titleColor:string = "orange";
  public detailModeId:number = 0;

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
