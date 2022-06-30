import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Works } from 'src/app/models/works.model';
import { AppState } from 'src/app/store/app.reducers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailComponent } from 'src/app/shared/components/modals/modal-detail/modal-detail.component';

@Component({
  selector: 'app-orden-grid',
  templateUrl: './orden-grid.component.html',
  styleUrls: ['./orden-grid.component.scss']
})
export class OrdenGridComponent implements OnInit {
  
  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  public datasource!: Works[];
  public headelements:string [] = [
    'Código identific. Interna ',
    'Nombre',
    'Etapa',
    'Estado',
    'Monto Actualizado',
    'Avance Financiero ',
    'Avance Fisico',
    'Fuente Financiamiento'
  ];
  constructor(private readonly store:Store<AppState>,private modalService:NgbModal) { } 

  ngOnInit(): void {
    this.store.select('works').subscribe(({works})=>{
      if(works){
        this.datasource = works;
      }
    });
  }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

  viewModal(id: number) {
    const modalRef = this.modalService.open(ModalDetailComponent, {
      windowClass: 'modal-pink',
      size: 'lg',
      centered: true
    })
    modalRef.componentInstance.color = 'pink';
    modalRef.componentInstance.title = 'Orden de Pago';
    modalRef.componentInstance.icon = 'hand-holding-dollar';
    modalRef.componentInstance.data = {
      id
    };
  }

}
