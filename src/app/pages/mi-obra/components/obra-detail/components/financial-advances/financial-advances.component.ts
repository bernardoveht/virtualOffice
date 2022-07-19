import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { WorkSteps } from 'src/app/constants/enums/work.enum';
import { Works } from 'src/app/models/works.model';
import { AppState } from 'src/app/store/app.reducers';
import *  as organismos from 'src/data/organismos-obras.json';
import *  as planes from 'src/data/planes.json';


@Component({
  selector: 'app-financial-advances',
  templateUrl: './financial-advances.component.html',
  styleUrls: ['../../obra-detail.component.scss','./financial-advances.component.scss']
})
export class FinancialAdvancesComponent implements OnInit ,OnDestroy{
  public title: string = "Avance financiero";
  public icon: string = "chart-column";
  public titleColor: string = "green";
  public work!:Works;
  public organismo!:string;
  public planes!:string;
  public organismoList:any =[];
  public planesList:any =[];
  public workSteps = WorkSteps;
  
  private obra$!:Subscription;


  constructor(private readonly store:Store<AppState>) { }


  ngOnInit(): void {

    this.organismoList = (organismos as any).default
    this.planesList = (planes as any).default

      this.obra$ = this.store.select('works').subscribe(({work})=>{
        if(work){
          this.work = work;
          const org = this.organismoList.filter((x: { id: string; })=> x.id == this.work.ownerOrganismId).value;
          this.organismo = org ?? 'No encontrado';
          const pla = this.planesList.filter((x: { id: string; })=> x.id == this.work.ownerOrganismId).value;
          this.planes = org ?? 'No encontrado';
     
        }
      })
  }

  ngOnDestroy(): void {
    this.obra$.unsubscribe();
  }

}
