import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import *  as planes from 'src/data/planes-convenios.json';
import { StateSelect, TypeSelect } from '../../../../models/agreements.model';
import * as agreementsActions from 'src/app/store/actions/agreements/agreements.actions'
import { SelectSettings } from 'src/app/constants/selects';
import { SelectSettingsMultiple } from '../../../../constants/selects';

@Component({
  selector: 'app-convenio-search',
  templateUrl: './convenio-search.component.html',
  styleUrls: ['./convenio-search.component.scss']
})
export class ConvenioSearchComponent implements OnInit {
  public keepFilters = false;
  public selectSettings: IDropdownSettings = SelectSettings;
  public selectSettingMultiple: IDropdownSettings = SelectSettingsMultiple;
  private auth$: Subscription | undefined;
  public openSearch = false;
  public searchForm!: FormGroup;
  public planesList: any = [];
  public estadoList: any = StateSelect;
  public tipoList: any = TypeSelect;
  public filter = {
    page: 0,
    pageSize: 50,
    orderBy: '',
    orderDescending: false,
    id: '',
    provinces: [],
    departments: [],
    municipalities: [],
    beneficiaryOrganismId: ''
  }

  constructor(private fb: FormBuilder, private readonly store: Store<AppState>) {
    this.openSearcher();
    this.initSearchForm();
  }

  ngOnInit(): void {}

  public openSearcher() {
    this.openSearch = !this.openSearch;
    this.planesList = (planes as any).default
  }

  public handleSearch() {
    const { sippe} = this.searchForm.value;
    const filters = { ...this.filter };

    filters.id = sippe ? sippe : '';

    this.store.dispatch(agreementsActions.getSearchAgreements({ filters }));
    this.openSearcher();
    if (!this.keepFilters) {
      this.searchForm.reset();
    }
  }

  clearFilters() {
    this.searchForm.reset();
    const filters = { ...this.filter }
    this.store.dispatch(agreementsActions.getSearchAgreements({ filters }));
  }

  private initSearchForm() {
    this.searchForm = this.fb.group({
      sippe: [''],
      nombre_proyecto: [''],
      tipo: [''],
      estado: [''],
      planes: [''],
      fechaPresentacion: [''],
    })
  }



}
