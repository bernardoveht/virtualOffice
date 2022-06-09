import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Projects } from 'src/app/models/projects.model';
import { AppState } from 'src/app/store/app.reducers';
import * as projectActions from 'src/app/store/actions/projects/projects.actions';
import { ProjectsFilter } from '../../../../models/projects.model';

@Component({
  selector: 'app-proyecto-grid',
  templateUrl: './proyecto-grid.component.html',
  styleUrls: ['./proyecto-grid.component.scss']
})
export class ProyectoGridComponent implements OnInit {
  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  constructor(private readonly store:Store<AppState>,) { }
 
  public filters:ProjectsFilter | any;
  public datasource!: Projects[];
  public totalCount:number = 0;
  public start:number = 0;
  public end:number = 50;
  public headelements:string [] = [
    'Código SIPPE ',
    'Nombre',
    'Estado Nivel',
    'Estado',
    'Monto',
    'Plazo(dias)',
    'Accion'
  ];
 

  ngOnInit(): void {
    this.store.select('projects').subscribe((state)=>{
      if(state.projectPaginator?.result && state.projectPaginator?.result.length){
        this.filters = {...state.filters};;
        this.datasource = state.projectPaginator?.result;
        this.totalCount = state.projectPaginator?.totalCount;
        var table:any = document.getElementById('table-proyect');
        table.scrollTop = 0;
      }
    });
  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

  public changeGridPage(pageNumber:number){
    this.filters.page = pageNumber;
    this.store.dispatch(projectActions.getSearchProjects({filters:this.filters}));
  }

}
