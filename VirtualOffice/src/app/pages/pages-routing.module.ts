

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'oficina-virtual', pathMatch: 'full' },
      {
        path: 'oficina-virtual',
        loadChildren: () => import('./virtual-office/virtual-office.module').then((m) => m.VirtualOfficeModule),
        canActivate: [],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
