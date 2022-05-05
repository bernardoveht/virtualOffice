import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiGestionComponent } from './mi-gestion.component';


const routes: Routes = [{ path: '', component: MiGestionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiGestionRoutingModule {}
