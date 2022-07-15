import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { WorksFilter } from 'src/app/models/works.model';
import { AppState } from 'src/app/store/app.reducers';
import { getUser } from 'src/app/store/selectors/auth/auth.selector';
import * as workActions from 'src/app/store/actions/works/works.actions'

@Component({
  selector: 'app-obra-search',
  templateUrl: './obra-search.component.html',
  styleUrls: ['./obra-search.component.scss']
})
export class ObraSearchComponent implements OnInit,OnDestroy {
  public filter:WorksFilter = {
    page: 0,
    pageSize: 50,
    orderBy: '',
    orderDescending: false,
    id: '',
    provinces: [],
    departments: [],
    municipalities: [],
    beneficiaryOrganismId:''
  };
  public searchForm: FormGroup;
  public openSearch = false;

  private auth$:Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private readonly store: Store<AppState>,
  ) { 
    this.searchForm = this.fb.group({
      sippe:[''],
      // organismo:[''],
      name:[''],
      plan:[''],
    })
  }
  ngOnDestroy(): void {
    this.auth$?.unsubscribe();
  }

  ngOnInit(): void {
    this.auth$ = this.store.select(getUser).subscribe(user =>{
      if(user){
        this.filter.provinces = user.provinceId ?[user.provinceId]: [];
        this.filter.municipalities = user.municipalityId ?[user.municipalityId] : [];
      }
    });
  }

  openSearcher(){
    this.openSearch = !this.openSearch;
  }
  handleSearch(){
    const {sippe,name} = this.searchForm.value;
    this.filter.id = sippe ? sippe:'';
    this.store.dispatch(workActions.getSearchWorks({filter:this.filter}));
    this.openSearcher();
    this.searchForm.reset();
  }

}
