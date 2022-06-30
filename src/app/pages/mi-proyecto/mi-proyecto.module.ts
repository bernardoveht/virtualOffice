import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiProyectoRoutingModule } from './mi-proyecto.routing.module';
import { MiProyectoComponent } from './mi-proyecto.component';
import { ProyectoSearchComponent } from './components/proyecto-search/proyecto-search.component';
import { ProyectoGridComponent } from './components/proyecto-grid/proyecto-grid.component';
import { ProyectoDetailComponent } from './components/proyecto-detail/proyecto-detail.component';
import { ProyectoDesembolsoComponent } from './components/proyecto-desembolso/proyectodesembolso.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ProyectoModalCardComponent } from './components/proyecto-modal-card/proyecto-modal-card.component';
import { ProyectoModalDetailComponent } from './components/proyecto-modal-detail/proyecto-modal-detail.component';




@NgModule({
  declarations:[
    MiProyectoComponent,
    ProyectoSearchComponent,
    ProyectoGridComponent,
    ProyectoDetailComponent,
    ProyectoDesembolsoComponent,
    ProyectoModalCardComponent,
    ProyectoModalDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    ReactiveFormsModule, 
    FormsModule,
    MiProyectoRoutingModule,
    NgbDatepickerModule,
    NgMultiSelectDropDownModule.forRoot(),
  ]
})
export class MiProyectoModule { }
