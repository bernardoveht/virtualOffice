import { Component, Input, OnInit } from '@angular/core';

export interface ProgressData{
  text:string;
  value:number;
}

@Component({
  selector: 'app-progress-data',
  templateUrl: './progress-data.component.html',
  styleUrls: ['./progress-data.component.scss']
})

export class ProgressDataComponent implements OnInit {
  @Input() color!: string;
  @Input() totalAmount!: number;
  @Input() title!: string;
  @Input() datasource!:ProgressData[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
