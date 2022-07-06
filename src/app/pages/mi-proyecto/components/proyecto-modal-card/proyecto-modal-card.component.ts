import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as workType from 'src/data/workTyoe.json';
import * as workTypeGroup from 'src/data/workTypeGroup.json';

@Component({
  selector: 'app-proyecto-modal-card',
  templateUrl: './proyecto-modal-card.component.html',
  styleUrls: ['./proyecto-modal-card.component.scss']
})
export class ProyectoModalCardComponent implements OnInit {
  @Output() public readonly changeDetailMode = new EventEmitter<any>();  
  @Input() data:any;
  public showObservations = false;

  public workTypeList:any[]=[];
  public workTypeGroupList:any[]=[];
  public workTypeDescription:string='';
  public workTypeGroupDescription:string='';
  public workTypeSubGroupDescription:string='';
  
  constructor(
    public activeModal: NgbActiveModal,
    private readonly store: Store<AppState>) {
      this.workTypeList = (workType as any).default
      this.workTypeGroupList = (workTypeGroup as any).default
     }

  ngOnInit(): void {

    this.store.select('projects').subscribe((store) => {
  
      if(store.details){
        this.workTypeSubGroupDescription = store.details[0].name;
      }

      const {details} = this.data;

      if(details){
        const typeList = this.workTypeList.filter(x=> x.id === details.workTypeId);
        const typeGroupList = this.workTypeGroupList.filter(x=> x.id === details.workTypeGroupId);
      
        this.workTypeGroupDescription = typeGroupList[0].name as string;
        this.workTypeDescription = typeList[0].name as string;
      }
    });
    
  }

}
