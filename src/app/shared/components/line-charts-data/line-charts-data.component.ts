import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-charts-data',
  templateUrl: './line-charts-data.component.html',
  styleUrls: ['./line-charts-data.component.scss']
})
export class LineChartsDataComponent implements OnInit {
  @Input() color!: string;
  @Input() totalAmount!: number;
  @Input() title!: string;
  @Input() graphicItems!: ChartData<'line'> | undefined;
  @Input() options!: any;



  constructor() { }

  ngOnInit(): void {
  }

}
