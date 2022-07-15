import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Projects } from 'src/app/models/projects.model';
import { AppState } from 'src/app/store/app.reducers';
import * as projectActions from 'src/app/store/actions/projects/projects.actions';
import { ProjectsFilter } from '../../../../models/projects.model';
import { Sort } from '@angular/material/sort';
import { compareSort } from 'src/app/core/helpers/sorts';

@Component({
  selector: 'app-proyecto-grid',
  templateUrl: './proyecto-grid.component.html',
  styleUrls: ['./proyecto-grid.component.scss']
})
export class ProyectoGridComponent implements OnInit {
  @Output() public readonly changeCardDetailMode = new EventEmitter<any>();

  public filters: ProjectsFilter | any;
  public datasource!: Projects[];
  public totalCount: number = 0;
  public start: number = 0;
  public end: number = 50;
  public headelements: any = [
    { name: 'Código SIPPE', sort: 'id' },
    { name: 'Nombre', sort: 'name' },
    { name: 'Estado', sort: 'workflowStep' },
    { name: 'Desde', sort: 'creationDate' },
    { name: 'Monto total vigente', sort: 'totalCost' },
    { name: 'Accion', sort: '' }
  ];
  constructor(private readonly store: Store<AppState>) { }


  ngOnInit(): void {
    this.store.select('projects').subscribe((state) => {
      if (state.projectPaginator?.result && state.projectPaginator?.result.length) {
        this.filters = { ...state.filters };
        this.datasource = state.projectPaginator?.result;
        this.totalCount = state.projectPaginator?.totalCount;
        var table: any = document.getElementById('table-proyect');
        if (table) {
          table.scrollTop = 0;
        }
      }
    });
  }

  public setDetail(event: any) {
    this.changeCardDetailMode.emit(event);
  }

  public changeGridPage(pageNumber: number) {
    this.filters.page = pageNumber;
    this.store.dispatch(projectActions.getSearchProjects({ filters: this.filters }));
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
          return compareSort(a.name, b.name, isAsc);
        case 'workflowStep':
          return compareSort(a.workflowStep, b.workflowStep, isAsc);
        case 'creationDate':
          return compareSort(a.creationDate, b.creationDate, isAsc);
        case 'totalCost':
          return compareSort(a.totalCost, b.totalCost, isAsc);
        default:
          return 0;
      }
    });
  }
}




