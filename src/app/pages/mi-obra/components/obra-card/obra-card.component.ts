import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailComponent } from 'src/app/shared/components/modals/modal-detail/modal-detail.component';

@Component({
  selector: 'app-obra-card',
  templateUrl: './obra-card.component.html',
  styleUrls: ['./obra-card.component.scss']
})
export class ObraCardComponent implements OnInit {

  public active:boolean = false;
  
  @Output() public readonly changeDetailMode = new EventEmitter<number>();

  constructor(private modalService: NgbModal) { }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

  ngOnInit(): void {
  }

  public viewModal() {
    const modalRef = this.modalService.open(ModalDetailComponent,{
      windowClass: 'modal-green', 
      size:'lg',
      centered:true
    });
    modalRef.componentInstance.color = 'green';
    modalRef.componentInstance.title = 'Obra';
    modalRef.componentInstance.icon = 'truck';
    modalRef.componentInstance.actionButton = () => this.setDetail(1);
    modalRef.componentInstance.data = {
      // data aca
    };
  }
}
