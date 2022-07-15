import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Works, WorksFilter } from 'src/app/models/works.model';
import { AppState } from 'src/app/store/app.reducers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as worksActions from 'src/app/store/actions/works/works.actions';
import { Sort } from '@angular/material/sort';
import { compareSort } from 'src/app/core/helpers/sorts';
import { WorkSteps } from 'src/app/constants/enums/work.enum';
import { ObraModalDetailComponent } from '../obra-modal-detail/obra-modal-detail.component';

@Component({
  selector: 'app-obra-grid',
  templateUrl: './obra-grid.component.html',
  styleUrls: ['./obra-grid.component.scss']
})
export class ObraGridComponent implements OnInit {

  @Output() public readonly changeDetailMode = new EventEmitter<any>();
  public datasource!: Works[];
  public filters:WorksFilter[] | any;
  public totalCount: number = 0;
  public workSteps = WorkSteps; 
  public headelements:any = [
    { name: 'Código SIPPE', sort: 'projectId' },
    { name: 'ID Obra', sort: 'id' },
    { name: 'Nombre', sort: 'name' },
    { name: 'Estados', sort: 'step' },
    { name: 'Desde', sort: 'creationDate' },
    { name: 'Monto total vigente', sort: 'updatedAmount' },
    { name: 'Acciones', sort: '' },
  ];
  constructor(private readonly store:Store<AppState>,private modalService:NgbModal) { } 

  ngOnInit(): void {
    this.store.select('works').subscribe((state)=>{
      if(state.workPaginator ){
        this.filters= {...state.filters};
        this.datasource = state.workPaginator.result;
        this.totalCount = state.workPaginator.totalCount || 0;
        var table: any = document.getElementById('table-obra');
        if (table) {
          table.scrollTop = 0;
        }
      }
    });
  }
  public changeGridPage(pageNumber: number) {
    this.filters.page = pageNumber;
    this.store.dispatch(worksActions.getSearchWorks({filter:this.filters}));   
  }
  public setDetail(id:number){
    this.changeDetailMode.emit(id);
  }

  public viewModal(work:any) {
    const modalRef = this.modalService.open(ObraModalDetailComponent,{
      windowClass: 'modal-green', 
      size:'lg',
      centered:true
    });
    modalRef.componentInstance.color = 'green';
    modalRef.componentInstance.title = 'Obra';
    modalRef.componentInstance.icon = 'truck';
    modalRef.componentInstance.actionButton = () => this.setDetail(1);
    modalRef.componentInstance.data = {
     ...work
    };
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
        case 'projectId':
          return compareSort(a.projectId, b.projectId, isAsc);
        case 'id':
          return compareSort(a.id, b.id, isAsc);
        case 'name':
          return compareSort(a.name, b.name, isAsc);
        case 'step':
          return compareSort(a.step, b.step, isAsc);
        case 'creationDate':
          return compareSort(a.creationDate, b.creationDate, isAsc);
        case 'updatedAmount':
          return compareSort(a.updatedAmount, b.updatedAmount, isAsc);
        default:
          return 0;
      }
    });
  }

}
