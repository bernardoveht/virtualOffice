import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-proyecto-grid',
  templateUrl: './proyecto-grid.component.html',
  styleUrls: ['./proyecto-grid.component.scss']
})
export class ProyectoGridComponent implements OnInit {
  
  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  constructor(private readonly store:Store<AppState>,) { }

  ngOnInit(): void {

    this.store.select('projects').subscribe((state)=>{
      console.log(state.projects);
    });

  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

}
