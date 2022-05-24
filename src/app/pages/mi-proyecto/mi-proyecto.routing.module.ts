import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiProyectoComponent } from './mi-proyecto.component';

 

const routes: Routes = [
  { path: '', component: MiProyectoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiProyectoRoutingModule {}
