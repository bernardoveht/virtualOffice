import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiRendicionRoutingModule } from './mi-rendicion.routing.module';
import { MiRendicionComponent } from './mi-rendicion.component';
import { RendicionesGridComponent } from './components/rendiciones-grid/rendiciones-grid.component';
import { RendicionesSearchComponent } from './components/rendiciones-search/rendiciones-search.component';
import { RendicionDetailComponent } from './components/rendicion-detail/rendicion-detail.component';
import { ExpedienteComponent } from './components/expediente/expediente.component';
import { DesembolsoComponent } from './components/desembolso/desembolso.component';



@NgModule({
  declarations:[
    MiRendicionComponent,
    RendicionesGridComponent,
    RendicionesSearchComponent,
    RendicionDetailComponent,
    ExpedienteComponent,
    DesembolsoComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    ReactiveFormsModule, 
    FormsModule,
    MiRendicionRoutingModule,
  ]
})
export class MiRendicionModule { }
