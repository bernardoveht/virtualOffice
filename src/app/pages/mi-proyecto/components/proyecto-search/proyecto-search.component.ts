import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProjectsFilter } from 'src/app/models/projects.model';
import { AppState } from 'src/app/store/app.reducers';
import * as projectActions from 'src/app/store/actions/projects/projects.actions'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subscription } from 'rxjs';
import { getUser } from 'src/app/store/selectors/auth/auth.selector';

@Component({
  selector: 'app-proyecto-search',
  templateUrl: './proyecto-search.component.html',
  styleUrls: ['./proyecto-search.component.scss']
})
export class ProyectoSearchComponent implements OnInit ,OnDestroy{
  public filter:ProjectsFilter = {
    provinces: [],
    page: 0,
    pageSize: 50,
    orderBy: '',
    orderDescending: false,
    id: '',
    bapinCode: '',
    name: '',
    portfolioId: null,
    departments: [],
    municipalities: [],
    localities: [],
    workTypeGroupId: null,
    workTypeSubgroupId: null,
    workTypeId: null,
    workflowSteps: [],
    budgetaryProgramId: '',
    tematicAreaId: null,
    planIds: [],
    tagValues: [],
    managerUserId: '',
    organismInChargeId: '',
    beneficiaryOrganismId: '',
    externalCreditOrganisms: [],
    loanId: '',
    developmentState: null,
    workflowStepStatuses: [],
    haveLocations: true,
    isEmergency: false,
    lastUpdateTo: '',
    geoJsonLayerId: '',
    geoJsonFeatureCollection: '',
    includeArchived: false,
    lastUpdateFrom: ''
  };

  dropdownList:any = [];
  dropdownSettings:IDropdownSettings={};
  private auth$:Subscription | undefined;


  public openSearch = false;
  public searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly store: Store<AppState>,
    ) {
      this.searchForm = this.fb.group({
        sippe:[''],
        // organismo:[''],
        name:[''],
        plan:[''],
        fechaPresentacion:[''],
  
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

    this.dropdownList = [
      { item_id: 1, item_text: 'Item1' },
      { item_id: 2, item_text: 'Item2' },
      { item_id: 3, item_text: 'Item3' },
      { item_id: 4, item_text: 'Item4' },
      { item_id: 5, item_text: 'Item5' }
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      allowSearchFilter: true,
      searchPlaceholderText:'Buscar'
  };
  }

  openSearcher(){
    this.openSearch = !this.openSearch;
  }
  handleSearch(){
    const {sippe,name} = this.searchForm.value;
    this.filter.name = name ? name:'';
    this.filter.id = sippe ? sippe:'';
    this.store.dispatch(projectActions.getSearchProjects({filters:this.filter}));
    this.openSearcher();
    this.searchForm.reset();
  }
}
