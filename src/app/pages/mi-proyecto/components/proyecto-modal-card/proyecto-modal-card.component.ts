import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyectoModalDetailComponent } from '../proyecto-modal-detail/proyecto-modal-detail.component';

@Component({
  selector: 'app-proyecto-modal-card',
  templateUrl: './proyecto-modal-card.component.html',
  styleUrls: ['./proyecto-modal-card.component.scss']
})
export class ProyectoModalCardComponent implements OnInit {
  @Output() public readonly changeDetailMode = new EventEmitter<any>();  
  @Input() data:any;
  public showObservations = false;
  
  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) { }

  ngOnInit(): void {
    // if(this.data.id == 3){
    //   this.showObservations =true;
    // }
  }
  // public detailModal(id:number){
  //   this.activeModal.close('Close click');
  //   const modalRef = this.modalService.open(ProyectoModalDetailComponent,{
  //     windowClass: 'modal-orange with-border', 
  //     centered:true,
  //   });
  //   modalRef.componentInstance.data = "aca le pasas data";
  // }
}
