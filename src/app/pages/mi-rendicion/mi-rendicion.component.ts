import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData } from 'chart.js';
import { AmountInformationItem } from 'src/app/models/total-rendicion.model';
import { ProgressData } from 'src/app/shared/components/progress-data/progress-data.component';

@Component({
  selector: 'app-mi-rendicion',
  templateUrl: './mi-rendicion.component.html',
  styleUrls: ['./mi-rendicion.component.scss']
})
export class MiRendicionComponent implements OnInit {

  public title: string = "Mis rendiciones";
  public icon: string = "file-invoice-dollar";
  public titleColor: string = "green-light";
  public doughnutChartLabels: string[] = ['Iniciadas', 'En Observación', 'Adjudicada', 'Rechazadas', 'Contratadas'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [5, 8, 7, 10, 16],
        backgroundColor: [
          'rgb(219, 220, 200)',
          'rgb(217, 220, 168)',
          'rgb(215, 220, 139)',
          'rgb(227, 230, 74)',
          'rgb(210, 224, 0)'
        ],
        hoverBackgroundColor: [
          'rgba(219, 220, 200,0.8)',
          'rgba(217, 220, 168,0.8)',
          'rgba(215, 220, 139,0.8)',
          'rgba(227, 230, 74,0.8)',
          'rgba(210, 224, 0,0.8)'
        ]
      },
    ],
  };
  public itemsTotal: AmountInformationItem[] = [
    {
      icon: 'sack-dollar',
      title: 'Monto Total',
      amount: 7500,
      type: 'money'
    },
  ]
  public totalAlerts: AmountInformationItem[] = [
    {
      icon: 'eye',
      title: 'Alertas',
      amount: 2,
      type: 'text'
    }
  ]

  public progressData: ProgressData[] = [
    { text: 'Iniciados', value: 30 },
    { text: 'En gestión', value: 80 },
    { text: 'Aprobados', value: 60 }
  ]


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public changeDetailMode(id: number) {
    this.router.navigate([`/pages/mis-rendiciones/detalle/${id}`]);
  }

}
