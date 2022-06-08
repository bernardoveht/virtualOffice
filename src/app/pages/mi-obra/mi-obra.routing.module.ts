import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiObraComponent } from './mi-obra.component';


const routes: Routes = [{ path: '', component: MiObraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiObraRoutingModule {}
