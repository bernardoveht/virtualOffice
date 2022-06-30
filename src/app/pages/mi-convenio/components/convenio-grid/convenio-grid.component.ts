import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailComponent } from 'src/app/shared/components/modals/modal-detail/modal-detail.component';

@Component({
  selector: 'app-convenio-grid',
  templateUrl: './convenio-grid.component.html',
  styleUrls: ['./convenio-grid.component.scss']
})
export class ConvenioGridComponent implements OnInit {
  
  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  @Input() public dataSource:any[] = [];

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

  public viewModal() {
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
