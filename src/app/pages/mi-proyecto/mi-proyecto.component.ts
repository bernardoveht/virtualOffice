import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as projectActions from 'src/app/store/actions/projects/projects.actions'
import { TotalRendicionItem } from 'src/app/models/total-dendicion.model';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-mi-proyecto',
  templateUrl: './mi-proyecto.component.html',
  styleUrls: ['./mi-proyecto.component.scss']
})
export class MiProyectoComponent implements OnInit {
  public title: string = "Mis Proyectos";
  public icon: string = "file-invoice-dollar";
  public titleColor: string = "orange";
  public detailModeId: number = 0;

  public doughnutChartLabels: string[] = ['Iniciadas', 'En Observación', 'Adjudicada', 'Rechazadas', 'Contratadas'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100, 200, 180],
        backgroundColor: [
          'rgb(253, 234, 211)',
          'rgb(255, 211, 159)',
          'rgb(248, 190, 122)',
          'rgb(250, 180, 99)',
          'rgb(248, 161, 59)'
        ],
        hoverBackgroundColor: [
          'rgba(253, 234, 211,0.8)',
          'rgba(255, 211, 159,0.8)',
          'rgba(248, 190, 122,0.8)',
          'rgba(250, 180, 99,0.8)',
          'rgba(248, 161, 59,0.8)'
        ]
      },
    ],


  };

  public itemsTotal: TotalRendicionItem[] = [
    {
      icon: 'sack-dollar',
      title: 'Monto Total',
      amount: 7500
    },
  ]

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(projectActions.getAllProjects());
  }

  public changeDetailMode(id: number) {
    this.detailModeId = id;
  }

  public backStep() {
    this.detailModeId = 0;
  }


}
