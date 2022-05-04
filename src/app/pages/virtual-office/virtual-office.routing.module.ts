import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualOfficeComponent } from './virtual-office.component';

const routes: Routes = [{ path: '', component: VirtualOfficeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualOfficeRoutingModule {}
