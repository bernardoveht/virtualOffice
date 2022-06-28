import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiOrdenRoutingModule } from './mi-orden.routing.module';
import { MiOrdenComponent } from './mi-orden.component';
import { OrdenSearchComponent } from './components/orden-search/orden-search.component';
import { OrdenDetailComponent } from './components/orden-detail/orden-detail.component';
import { OrdenDesembolsoComponent } from './components/orden-desembolso/orden-desembolso.component';
import { OrdenGridComponent } from './components/orden-grid/orden-grid.component';



@NgModule({
  declarations:[
    MiOrdenComponent,
    OrdenSearchComponent,
    OrdenDetailComponent,
    OrdenDesembolsoComponent,
    OrdenGridComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    ReactiveFormsModule, 
    FormsModule,
    MiOrdenRoutingModule,
  ]
})
export class MiOrdenModule { }
