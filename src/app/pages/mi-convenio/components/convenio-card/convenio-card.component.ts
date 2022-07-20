import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Agreements, AgreementsFilter } from 'src/app/models/agreements.model';
import { AppState } from 'src/app/store/app.reducers';
import { ModalDetailComponent } from '../../../../shared/components/modals/modal-detail/modal-detail.component';

@Component({
  selector: 'app-convenio-card',
  templateUrl: './convenio-card.component.html',
  styleUrls: ['./convenio-card.component.scss']
})
export class ConvenioCardComponent implements OnInit {
  public filters: AgreementsFilter | any;
  public datasource!: Agreements[];
  public totalCount: number = 0;
  
  @Output() public readonly changeDetailMode = new EventEmitter<number>();

  constructor(private modalService: NgbModal, private readonly store: Store<AppState>) { }

  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

  ngOnInit(): void {
    this.store.select('agreements').subscribe((state) => {
      if (state.agreements && state.agreements.length) {
        this.filters = { ...state.filters };
        if(state.agreements){
          this.datasource = state.agreements;
        }
        this.totalCount = state.totalCounts || 0;
        var table: any = document.getElementById('table-convenio');
        if (table) {
          table.scrollTop = 0;
        }
      }
    });
  }

  public viewModal(agreement:Agreements) {
    const modalRef = this.modalService.open(ModalDetailComponent, {
      windowClass: 'modal-violet',
      size: 'lg',
      centered: true
    });
    modalRef.componentInstance.color = 'violet';
    modalRef.componentInstance.title = 'Convenio';
    modalRef.componentInstance.icon = 'file-contract';
    modalRef.componentInstance.actionButton = () => this.setDetail(agreement.id);
    modalRef.componentInstance.data = {
      sippeCode:agreement.id,
      name:agreement.name,
      state:agreement.state,
    };
  }


}
