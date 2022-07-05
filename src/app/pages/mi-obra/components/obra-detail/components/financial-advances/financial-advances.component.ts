import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-advances',
  templateUrl: './financial-advances.component.html',
  styleUrls: ['../../obra-detail.component.scss','./financial-advances.component.scss']
})
export class FinancialAdvancesComponent implements OnInit {
  public title: string = "Avance financiero";
  public icon: string = "chart-column";
  public titleColor: string = "green";

  constructor() { }

  ngOnInit(): void {
  }

}
