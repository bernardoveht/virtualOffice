import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-rendicion',
  templateUrl: './total-rendicion.component.html',
  styleUrls: ['./total-rendicion.component.scss']
})
export class TotalRendicionComponent implements OnInit {

  @Input() color:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
