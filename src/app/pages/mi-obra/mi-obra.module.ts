import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiObraComponent } from './mi-obra.component';
import { ObraDesembolsoComponent } from './components/obra-desembolso/obra-desembolso.component';
import { ObraDetailComponent } from './components/obra-detail/obra-detail.component';
import { ObraGridComponent } from './components/obra-grid/obra-grid.component';
import { ObraSearchComponent } from './components/obra-search/obra-search.component';
import { MiObraRoutingModule } from './mi-obra.routing.module';
import { ObraCardComponent } from './components/obra-card/obra-card.component';
import { NgbAccordionModule, NgbDatepickerModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FinancialAdvancesComponent } from './components/obra-detail/components/financial-advances/financial-advances.component';
import { PhysicalAdvancesComponent } from './components/obra-detail/components/physical-advances/physical-advances.component';
import { DocumentsDetailComponent } from './components/obra-detail/components/documents-detail/documents-detail.component';
import { MatSortModule } from '@angular/material/sort';
import { ObraModalDetailComponent } from './components/obra-modal-detail/obra-modal-detail.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations:[
    MiObraComponent,
    ObraDesembolsoComponent,
    ObraDetailComponent,
    ObraGridComponent,
    ObraSearchComponent,
    ObraModalDetailComponent,
    ObraCardComponent,
    FinancialAdvancesComponent,
    PhysicalAdvancesComponent,
    DocumentsDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    ReactiveFormsModule, 
    FormsModule,
    MiObraRoutingModule,
    NgbProgressbarModule,
    NgbAccordionModule,
    MatSortModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbDatepickerModule
  ]
})
export class MiObraModule { }
