import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiGestionRoutingModule } from './mi-gestion.routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,MiGestionRoutingModule,SharedModule, ReactiveFormsModule, FormsModule
  ]
})
export class MiGestionModule { }
