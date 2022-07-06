import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProjectsFilter } from 'src/app/models/projects.model';
import { AppState } from 'src/app/store/app.reducers';
import * as projectActions from 'src/app/store/actions/projects/projects.actions'
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subscription } from 'rxjs';
import { getUser } from 'src/app/store/selectors/auth/auth.selector';
import *  as organismos from 'src/data/organismos.json';
import *  as planes from 'src/data/planes.json';
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

  public selectSettings:IDropdownSettings={};
  private auth$:Subscription | undefined;
 
  public keepFilters = false;
  public planesList:any=[]
  public organismoList:any=[];
  public openSearch = false;
  public searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly store: Store<AppState>,
    ) {
      this.searchForm = this.fb.group({
        sippe:[''],
        // organismos:[this.planesList],
        // planes:[this.planesList],
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
        this.filter.beneficiaryOrganismId = user.organismId ? '':user.organismId;
      }
    });


    this.organismoList = (organismos as any).default
    this.planesList = (planes as any).default

    this.selectSettings = {
      idField: 'id',
      textField: 'name',
      enableCheckAll: false,
      allowSearchFilter: true,
      searchPlaceholderText:'Buscar',
      limitSelection:1      
  };
  }

  openSearcher(){
    this.openSearch = !this.openSearch;
  }
  handleSearch(){

    const {sippe,name} = this.searchForm.value;
    const filters = {...this.filter};

    filters.name = name ? name: '';
    filters.id   =sippe? sippe :'';

    this.store.dispatch(projectActions.getSearchProjects({filters}));
    this.openSearcher();
    if(!this.keepFilters) {
      this.searchForm.reset();
    }
  }
  clearFilters(){
    this.searchForm.reset();
    const filters = {...this.filter}
    this.store.dispatch(projectActions.getSearchProjects({filters}));
  }
}
