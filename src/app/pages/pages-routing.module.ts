

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
        // canActivate: [],
      },
      {
        path: 'mi-gestion',
        loadChildren: () => import('./mi-gestion/mi-gestion.module').then((m) => m.MiGestionModule),
        // canActivate: [],
      },
      {
        path: 'mis-rendiciones',
        loadChildren: () => import('./mi-rendicion/mi-rendicion.module').then((m) => m.MiRendicionModule),
        // canActivate: [],
      },
      {
        path: 'mis-proyectos',
        loadChildren: () => import('./mi-proyecto/mi-proyecto.module').then((m) => m.MiProyectoModule),
        // canActivate: [],
      },
      {
        path: 'mis-ordenes-pago',
        loadChildren: () => import('./mi-orden/mi-orden.module').then((m) => m.MiOrdenModule),
        // canActivate: [],
      },
      {
        path: 'mis-convenios',
        loadChildren: () => import('./mi-convenio/mi-convenio.module').then((m) => m.MiConvenioModule),
        // canActivate: [],
      },
      {
        path: 'mis-obras',
        loadChildren: () => import('./mi-obra/mi-obra.module').then((m) => m.MiObraModule),
        // canActivate: [],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
