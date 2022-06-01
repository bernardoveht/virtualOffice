import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-graphic-data',
  templateUrl: './graphic-data.component.html',
  styleUrls: ['./graphic-data.component.scss']
})
export class GraphicDataComponent implements OnInit {

  @Input() graphicItems!:ChartData<'doughnut'>;

  public doughnutChartOptions:ChartOptions<'doughnut'> = {
    rotation: -90,
    circumference:180,
    plugins:{
      legend:{
        position:'left'
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
 


}
