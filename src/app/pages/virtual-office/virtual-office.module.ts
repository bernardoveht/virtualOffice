import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VirtualOfficeRoutingModule } from './virtual-office.routing.module';

@NgModule({
  declarations: [],
  imports: [VirtualOfficeRoutingModule,CommonModule, SharedModule, ReactiveFormsModule, FormsModule],
})
export class VirtualOfficeModule {}
