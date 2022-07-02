import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiRendicionComponent } from './mi-rendicion.component';
import { RendicionDetailComponent } from './components/rendicion-detail/rendicion-detail.component';
 

const routes: Routes = [
  { path: '', component: MiRendicionComponent },
  { path: 'detalle/:id', component: RendicionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiRendicionRoutingModule {}
