import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObraDetailComponent } from './components/obra-detail/obra-detail.component';
import { MiObraComponent } from './mi-obra.component';
import { ConvenioCardComponent } from '../mi-convenio/components/convenio-card/convenio-card.component';


const routes: Routes = [
  { path: '', component: MiObraComponent },
  { path: 'detalle/:id', component: ObraDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiObraRoutingModule {}
