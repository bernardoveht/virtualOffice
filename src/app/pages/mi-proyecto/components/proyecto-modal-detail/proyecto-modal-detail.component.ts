import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectBlockReasons, ProjectWorkflowStatuses } from 'src/app/constants/emuns/project.enums';

@Component({
  selector: 'app-proyecto-modal-detail',
  templateUrl: './proyecto-modal-detail.component.html',
  styleUrls: ['./proyecto-modal-detail.component.scss']
})
export class ProyectoModalDetailComponent implements OnInit {

  @Input() data:any;

  public statusDescrption:string ='';
  public blockReasonDescrption:string ='';
  
  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    const {project} = this.data;
    this.statusDescrption = ProjectWorkflowStatuses[project.workflowStepStatus];
    this.blockReasonDescrption = ProjectBlockReasons[project.blockReason];

  }
}
