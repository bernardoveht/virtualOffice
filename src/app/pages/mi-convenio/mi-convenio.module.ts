import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiConvenioRoutingModule } from './mi-convenio.routing.module';
import { ConvenioDesembolsoComponent } from './components/convenio-desembolso/convenio-desembolso.component';
import { ConvenioDetailComponent } from './components/convenio-detail/convenio-detail.component';
import { ConvenioGridComponent } from './components/convenio-grid/convenio-grid.component';
import { ConvenioSearchComponent } from './components/convenio-search/convenio-search.component';
import { MiConvenioComponent } from './mi-convenio.component';





@NgModule({
  declarations:[
    MiConvenioComponent,
    ConvenioDesembolsoComponent,
    ConvenioDetailComponent,
    ConvenioGridComponent,
    ConvenioSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    ReactiveFormsModule, 
    FormsModule,
    MiConvenioRoutingModule,
  ]
})
export class MiConvenioModule { }