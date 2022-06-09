import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-convenio-card',
  templateUrl: './convenio-card.component.html',
  styleUrls: ['./convenio-card.component.scss']
})
export class ConvenioCardComponent implements OnInit {

  @Output() public readonly changeDetailMode = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
