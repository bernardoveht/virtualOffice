import { Component, Input, OnInit } from '@angular/core';
import { TotalRendicionItem } from 'src/app/models/total-rendicion.model';

@Component({
  selector: 'app-total-rendicion',
  templateUrl: './total-rendicion.component.html',
  styleUrls: ['./total-rendicion.component.scss']
})
export class TotalRendicionComponent implements OnInit {

  @Input() color:string = '';
  @Input() items:TotalRendicionItem[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
