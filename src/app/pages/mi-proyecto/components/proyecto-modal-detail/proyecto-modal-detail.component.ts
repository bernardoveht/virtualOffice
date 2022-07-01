import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyectoModalCardComponent } from '../proyecto-modal-card/proyecto-modal-card.component';

@Component({
  selector: 'app-proyecto-modal-detail',
  templateUrl: './proyecto-modal-detail.component.html',
  styleUrls: ['./proyecto-modal-detail.component.scss']
})
export class ProyectoModalDetailComponent implements OnInit {

  @Input() data:any;
  
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  handleDetails(){
    const {project} =  this.data;
    const modalRef = this.modalService.open(ProyectoModalCardComponent,{
      windowClass: 'modal-orange with-border', 
      centered:true,
      size:'lg',
    });
    modalRef.componentInstance.data = {
      project
    };
  }
}
