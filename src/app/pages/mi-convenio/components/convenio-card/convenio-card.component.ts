import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailComponent } from '../../../../shared/components/modals/modal-detail/modal-detail.component';

@Component({
  selector: 'app-convenio-card',
  templateUrl: './convenio-card.component.html',
  styleUrls: ['./convenio-card.component.scss']
})
export class ConvenioCardComponent implements OnInit {

  @Output() public readonly changeDetailMode = new EventEmitter<number>();

  constructor(private modalService: NgbModal) { }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

  ngOnInit(): void {
  }

  viewModal() {
    const modalRef = this.modalService.open(ModalDetailComponent,{
      windowClass: 'modal-violet', 
      size:'lg',
      centered:true
    });
    modalRef.componentInstance.color = 'violet';
    modalRef.componentInstance.title = 'Convenio';
    modalRef.componentInstance.icon = 'file-contract';
    modalRef.componentInstance.actionButton = () => this.setDetail(1);
    modalRef.componentInstance.data = {
      // data aca
    };
  }

}
