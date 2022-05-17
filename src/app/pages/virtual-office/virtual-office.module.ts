import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VirtualOfficeRoutingModule } from './virtual-office.routing.module';
import { VirtualOfficeComponent } from './virtual-office.component';

@NgModule({
  declarations: [VirtualOfficeComponent],
  imports: [VirtualOfficeRoutingModule,CommonModule, SharedModule, ReactiveFormsModule, FormsModule, VirtualOfficeRoutingModule],
})
export class VirtualOfficeModule {}
