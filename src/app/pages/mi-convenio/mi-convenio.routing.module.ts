import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiConvenioComponent } from './mi-convenio.component';


const routes: Routes = [{ path: '', component: MiConvenioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiConvenioRoutingModule {}
