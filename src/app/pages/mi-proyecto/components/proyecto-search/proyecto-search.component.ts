import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProjectsFilter } from 'src/app/models/projects.model';
import { AppState } from 'src/app/store/app.reducers';
import * as projectActions from 'src/app/store/actions/projects/projects.actions'

@Component({
  selector: 'app-proyecto-search',
  templateUrl: './proyecto-search.component.html',
  styleUrls: ['./proyecto-search.component.scss']
})
export class ProyectoSearchComponent implements OnInit {

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

  public openSearch = false;
  public searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly store: Store<AppState>,
    ) {
      this.searchForm = this.fb.group({
        sippe:[''],
        organismo:[''],
        name:[''],
        plan:[''],
        fechaPresentacion:[''],
  
      })
     }

  ngOnInit(): void {
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
