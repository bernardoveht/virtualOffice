import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { VirtualOfficeComponent } from './virtual-office/virtual-office.component';
import { MiGestionComponent } from './mi-gestion/mi-gestion.component';
import { MiRendicionComponent } from './mi-rendicion/mi-rendicion.component';
import { TotalAmountComponent } from './mi-rendicion/components/total-amount/total-amount.component';


@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule]
})
export class PagesModule {}
