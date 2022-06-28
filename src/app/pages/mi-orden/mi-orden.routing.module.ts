import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiOrdenComponent } from './mi-orden.component';

const routes: Routes = [{ path: '', component: MiOrdenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiOrdenRoutingModule {}
