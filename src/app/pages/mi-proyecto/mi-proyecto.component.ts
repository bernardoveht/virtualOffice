import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as projectActions from 'src/app/store/actions/projects/projects.actions'

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

  constructor(private readonly store:Store<AppState>,) { }

  ngOnInit(): void {
    this.store.dispatch(projectActions.getAllProjects());
  }

  public changeDetailMode(id:number){
    this.detailModeId = id;
  }

  public backStep(){
    this.detailModeId = 0;
  }
}
