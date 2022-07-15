import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Works } from 'src/app/models/works.model';
import { ModalDetailComponent } from 'src/app/shared/components/modals/modal-detail/modal-detail.component';
import { AppState } from 'src/app/store/app.reducers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-obra-grid',
  templateUrl: './obra-grid.component.html',
  styleUrls: ['./obra-grid.component.scss']
})
export class ObraGridComponent implements OnInit {

  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  public datasource!: Works[];
  public headelements:any = [
    { name: 'Código SIPPE', sort: '' },
    { name: 'ID Obra', sort: '' },
    { name: 'Nombre', sort: '' },
    { name: 'Estados', sort: '' },
    { name: 'Desde', sort: '' },
    { name: 'Monto total vigente', sort: '' },
    { name: 'Acciones', sort: '' },
  ];
  constructor(private readonly store:Store<AppState>,private modalService:NgbModal) { } 

  ngOnInit(): void {
    this.store.select('works').subscribe(({workPaginator})=>{
      if(workPaginator){
        this.datasource = workPaginator.result;
      }
    });
  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
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
