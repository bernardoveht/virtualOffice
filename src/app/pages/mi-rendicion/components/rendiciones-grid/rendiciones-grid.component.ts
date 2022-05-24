import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rendiciones-grid',
  templateUrl: './rendiciones-grid.component.html',
  styleUrls: ['./rendiciones-grid.component.scss']
})
export class RendicionesGridComponent implements OnInit {
  
  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

}
