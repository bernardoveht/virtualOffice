import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData } from 'chart.js';
import { Subscription } from 'rxjs/internal/Subscription';
import { AmountInformationItem } from 'src/app/models/total-rendicion.model';

@Component({
  selector: 'app-rendicion-detail',
  templateUrl: './rendicion-detail.component.html',
  styleUrls: ['./rendicion-detail.component.scss']
})
export class RendicionDetailComponent implements OnInit, OnDestroy {

  public title: string = "Mis rendiciones";
  public icon: string = "file-invoice-dollar";
  public titleColor: string = "green-light";
  private routeSb = new Subscription();
  private id!: number;
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
  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.routeSb = this.route.params.subscribe((params) => {
      this.id = parseInt(params['id'], 10);
    });
  }

  ngOnDestroy(): void {
    this.routeSb.unsubscribe();
  }

  backStep() {
    this.router.navigate([`/pages/mis-rendiciones`]);
  }

}
