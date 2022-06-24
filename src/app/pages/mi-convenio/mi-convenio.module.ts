import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiConvenioRoutingModule } from './mi-convenio.routing.module';
import { ConvenioDetailComponent } from './components/convenio-detail/convenio-detail.component';
import { ConvenioGridComponent } from './components/convenio-grid/convenio-grid.component';
import { ConvenioSearchComponent } from './components/convenio-search/convenio-search.component';
import { MiConvenioComponent } from './mi-convenio.component';
import { ConvenioCardComponent } from './components/convenio-card/convenio-card.component';
import { ConvenioStateComponent } from './components/convenio-state/convenio-state.component';
import { ConvenioDatosGeneralesComponent } from './components/convenio-datos-generales/convenio-datos-generales.component';
import { ConvenioDatosGeneralesAlternativeComponent } from './components/convenio-datos-generales-alternative/convenio-datos-generales-alternative.component';





@NgModule({
  declarations:[
    MiConvenioComponent,
    ConvenioDetailComponent,
    ConvenioGridComponent,
    ConvenioSearchComponent,
    ConvenioCardComponent,
    ConvenioStateComponent,
    ConvenioDatosGeneralesComponent,
    ConvenioDatosGeneralesAlternativeComponent
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
