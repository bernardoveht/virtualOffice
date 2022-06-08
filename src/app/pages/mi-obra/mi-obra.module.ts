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



@NgModule({
  declarations:[
    MiObraComponent,
    ObraDesembolsoComponent,
    ObraDetailComponent,
    ObraGridComponent,
    ObraSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    ReactiveFormsModule, 
    FormsModule,
    MiObraRoutingModule,
  ]
})
export class MiObraModule { }
