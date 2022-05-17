import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiRendicionRoutingModule } from './mi-rendicion.routing.module';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { MiRendicionComponent } from './mi-rendicion.component';


@NgModule({
  declarations:[
    MiRendicionComponent,
    TotalAmountComponent
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