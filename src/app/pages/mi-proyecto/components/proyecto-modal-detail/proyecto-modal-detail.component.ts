import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectDetails } from 'src/app/models/projects.model';
import { ProyectoModalCardComponent } from '../proyecto-modal-card/proyecto-modal-card.component';
import * as projectActions from 'src/app/store/actions/projects/projects.actions'
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-proyecto-modal-detail',
  templateUrl: './proyecto-modal-detail.component.html',
  styleUrls: ['./proyecto-modal-detail.component.scss']
})
export class ProyectoModalDetailComponent implements OnInit {

  @Input() data:any;
  
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private readonly store: Store<AppState>) { }

  ngOnInit(): void {
  }
  handleDetails(){

    const {project} =  this.data;
    const {workTypeSubGroupId,workTypeGroupId,workTypeId} = project;

    const param:ProjectDetails ={
      workSubGroupId: workTypeSubGroupId,
      workTypeGroupId: workTypeGroupId,
      workTypeId: workTypeId
    }

    this.store.dispatch(projectActions.getDetailsProjects({ids:param}));

    const modalRef = this.modalService.open(ProyectoModalCardComponent,{
      windowClass: 'modal-orange with-border', 
      centered:true,
      size:'lg',
    });
    modalRef.componentInstance.data = {
      project,
      details:param
    };
  }
}
