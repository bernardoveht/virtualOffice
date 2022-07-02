import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiConvenioComponent } from './mi-convenio.component';
import { ConvenioDetailComponent } from './components/convenio-detail/convenio-detail.component';


const routes: Routes = [
  {
    path: '', component: MiConvenioComponent,
  },
  {
    path: 'detalle/:id', component: ConvenioDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiConvenioRoutingModule { }
