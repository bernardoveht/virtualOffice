import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Works } from 'src/app/models/works.model';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-obra-grid',
  templateUrl: './obra-grid.component.html',
  styleUrls: ['./obra-grid.component.scss']
})
export class ObraGridComponent implements OnInit {
  
  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  public datasource!: Works[];
  public headelements:string [] = [
    'Código identific. Interna ',
    'Nombre',
    'Etapa',
    'Estado',
    'Monto Actualizado',
    'Avance Financiero ',
    'Avance Fisico',
    'Fuente Financiamiento'
  ];
  constructor(private readonly store:Store<AppState>) { } 

  ngOnInit(): void {
    this.store.select('works').subscribe(({works})=>{
      if(works){
        this.datasource = works;
      }
    });
  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

}
