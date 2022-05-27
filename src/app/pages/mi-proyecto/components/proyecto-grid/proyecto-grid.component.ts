import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Projects } from 'src/app/models/projects.model';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-proyecto-grid',
  templateUrl: './proyecto-grid.component.html',
  styleUrls: ['./proyecto-grid.component.scss']
})
export class ProyectoGridComponent implements OnInit {
  
  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  constructor(private readonly store:Store<AppState>,) { }
  
  public datasource!: Projects[];
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
      if(state.projects){
        this.datasource = state.projects;
      }
    });

  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

}
