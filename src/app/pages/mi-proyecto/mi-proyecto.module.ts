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




@NgModule({
  declarations:[
    MiProyectoComponent,
    ProyectoSearchComponent,
    ProyectoGridComponent,
    ProyectoDetailComponent,
    ProyectoDesembolsoComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    ReactiveFormsModule, 
    FormsModule,
    MiProyectoRoutingModule,
  ]
})
export class MiProyectoModule { }
