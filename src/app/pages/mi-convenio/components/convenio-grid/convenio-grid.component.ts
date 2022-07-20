import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { ProjectWorkflowTypes } from 'src/app/constants/enums/agreements.enum';
import { compareSort } from 'src/app/core/helpers/sorts';
import { ModalDetailComponent } from 'src/app/shared/components/modals/modal-detail/modal-detail.component';
import { AppState } from 'src/app/store/app.reducers';
import { AgreementsFilter, Agreements } from '../../../../models/agreements.model';
import * as agreementsActions from 'src/app/store/actions/agreements/agreements.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-convenio-grid',
  templateUrl: './convenio-grid.component.html',
  styleUrls: ['./convenio-grid.component.scss']
})
export class ConvenioGridComponent implements OnInit, OnDestroy {

  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  public filters: AgreementsFilter | any;
  public datasource!: Agreements[];
  public totalCount: number = 0;
  public agreementSubscription$!:Subscription;

  public headelements: any = [
    { name: 'Código SIPPE', sort: 'id' },
    { name: 'Nombre', sort: 'name' },
    { name: 'Tipo', sort: 'type' },
    { name: 'Estado', sort: 'state' },
    { name: 'Desde', sort: '' },
    { name: 'Acciones', sort: '' }
  ];


  constructor(private modalService: NgbModal, private readonly store: Store<AppState>) { }


  ngOnInit(): void {
    this.agreementSubscription$ = this.store.select('agreements').subscribe((state) => {
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

  ngOnDestroy():void{
    this.agreementSubscription$.unsubscribe();
  }

  public setDetail(id: number) {
    this.changeDetailMode.emit(id);
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

  public changeGridPage(pageNumber: number) {
    this.filters.page = pageNumber;
    this.store.dispatch(agreementsActions.getSearchAgreements({ filters: this.filters }));
  }



  sortData(sort: Sort) {
    const data = this.datasource.slice();
    if (!sort.active || sort.direction === '') {
      this.datasource = data;
      return;
    }
    this.datasource = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compareSort(a.id, b.id, isAsc);
        case 'name':
          return compareSort(a.category.name, b.category.name, isAsc);
        case 'type':
          return compareSort(a.type, b.type, isAsc);
        case 'state':
          return compareSort(a.state, b.state, isAsc);
        default:
          return 0;
      }
    });
  }

}
