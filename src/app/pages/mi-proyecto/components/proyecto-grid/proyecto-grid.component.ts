import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Projects } from 'src/app/models/projects.model';
import { AppState } from 'src/app/store/app.reducers';
import * as projectActions from 'src/app/store/actions/projects/projects.actions';

@Component({
  selector: 'app-proyecto-grid',
  templateUrl: './proyecto-grid.component.html',
  styleUrls: ['./proyecto-grid.component.scss']
})
export class ProyectoGridComponent implements OnInit {
  
  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  constructor(private readonly store:Store<AppState>,) { }
  
  public datasource!: Projects[];
  public start:number = 0;
  public end:number = 50;
  public headelements:string [] = [
    'Código de la obra',
    'Obra',
    'Cantidad de rendiciones',
    'Acumulado desembolsos',
    'Acumulado Rendiciones',
    'Monto de obra',
    'Acciones'
  ];
 

  ngOnInit(): void {
    this.store.select('projects').subscribe((state)=>{
      if(state.projects && state.projects.length){
        this.datasource = state.projects;
        this.start = (state.currentPage - 1) * 50;
        this.end = this.start + 50;
        var table:any = document.getElementById('table-proyect');
        table.scrollTop = 0;
      }
    });
  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

  public changeGridPage(pageNumber:number){
    this.store.dispatch(projectActions.projectsPageChange({page:pageNumber}));
  }

}
