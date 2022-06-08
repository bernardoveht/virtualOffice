import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-obra-grid',
  templateUrl: './obra-grid.component.html',
  styleUrls: ['./obra-grid.component.scss']
})
export class ObraGridComponent implements OnInit {
  
  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

}
