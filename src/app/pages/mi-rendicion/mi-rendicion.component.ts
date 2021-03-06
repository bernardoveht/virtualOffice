import { Component, OnInit } from '@angular/core';

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
