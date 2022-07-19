import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { WorksFilter } from 'src/app/models/works.model';
import { AppState } from 'src/app/store/app.reducers';
import { getUser } from 'src/app/store/selectors/auth/auth.selector';
import * as workActions from 'src/app/store/actions/works/works.actions'
import *  as organismos from 'src/data/organismos-obras.json';
import *  as planes from 'src/data/planes.json';
import { SelectSettings } from 'src/app/constants/selects';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-obra-search',
  templateUrl: './obra-search.component.html',
  styleUrls: ['./obra-search.component.scss']
})
export class ObraSearchComponent implements OnInit,OnDestroy {
  public filter!:WorksFilter;
  public searchForm: FormGroup;
  public openSearch = false;
  public selectSettings: IDropdownSettings = SelectSettings;
  public organismoList:any =[];
  public planesList:any =[];
  public keepFilters = false;

  private works$:Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private readonly store: Store<AppState>,
  ) { 
    this.searchForm = this.fb.group({
      sippe:[''],
      obraid:[''],
      organismos:[''],
      name:[''],
      planes:[''],
      fechaPresentacion:['']
    })
  }
  ngOnDestroy(): void {
    this.works$?.unsubscribe();
  }

  ngOnInit(): void {
    this.works$ = this.store.select('works').subscribe(state =>{
      if(state.filters){
        this.filter ={...state.filters};      
      }
    });
    this.organismoList = (organismos as any).default
    this.planesList = (planes as any).default
  }

  openSearcher(){
    this.openSearch = !this.openSearch;
  }
  handleSearch() {
    const { sippe, name,obraid } = this.searchForm.value;
    const filter = { ...this.filter };

    filter.name = name ? name : '';
    filter.projectId = sippe ? sippe : '';
    filter.id = obraid ? obraid : '';

    this.store.dispatch(workActions.getSearchWorks({ filter }));
    this.openSearcher();
    if (!this.keepFilters) {
      this.searchForm.reset();
    }
  }
  clearFilters() {
    this.searchForm.reset();
    const filter = { ...this.filter }
    this.store.dispatch(workActions.getSearchWorks({ filter }));
  }

}
