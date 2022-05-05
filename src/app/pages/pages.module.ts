import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { VirtualOfficeComponent } from './virtual-office/virtual-office.component';
import { MiGestionComponent } from './mi-gestion/mi-gestion.component';


@NgModule({
  declarations: [PagesComponent, VirtualOfficeComponent, MiGestionComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule]
})
export class PagesModule {}
