import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Subscription } from 'rxjs';
import { Works } from 'src/app/models/works.model';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-physical-advances',
  templateUrl: './physical-advances.component.html',
  styleUrls: ['../../obra-detail.component.scss','./physical-advances.component.scss']
})
export class PhysicalAdvancesComponent implements OnInit,OnDestroy {
  public title: string = "Avance físico";
  public icon: string = "chart-column";
  public titleColor: string = "green";
  public work!:Works;

  private obra$!:Subscription;


  constructor(private readonly store:Store<AppState>) { }
  
  ngOnDestroy(): void {
    this.obra$.unsubscribe();
  }
  
  public lineChartData:ChartData<'line'>  = {
    
    datasets: [
      {
        data: [ 0,10,50,70,100 ],
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#00b9b1',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'false',
        borderDash: [5,5],
        borderWidth:2,
        pointBorderWidth:2,
        pointBackgroundColor:'#00b9b1',
        pointBorderColor:'#00b9b1',
      },
    ],
    labels: [ '0', '1', '2', '3', '4' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    plugins:{
      legend: {
        display: false
      },
    },
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      y: {
        suggestedMax:100,
        ticks:{
          callback: function(v,index,value){
            return v + '%'
          }
        }
      },
      x:{
        title:{
          text:'Períodos',
          display:true
        }
      }
    },

  };


  ngOnInit(): void {
    this.obra$ = this.store.select('works').subscribe(({work})=>{
      if(work){
        this.work = work;
        console.log('what no fun',work);
      }
    })
  }

}
