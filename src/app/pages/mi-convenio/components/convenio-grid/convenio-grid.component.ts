import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-convenio-grid',
  templateUrl: './convenio-grid.component.html',
  styleUrls: ['./convenio-grid.component.scss']
})
export class ConvenioGridComponent implements OnInit {
  
  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  @Input() public dataSource:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

}
