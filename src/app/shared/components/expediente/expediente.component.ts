import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent implements OnInit {

  @Input() color:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
