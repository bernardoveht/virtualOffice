import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiRendicionComponent } from './mi-rendicion.component';


const routes: Routes = [{ path: '', component: MiRendicionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiRendicionRoutingModule {}
