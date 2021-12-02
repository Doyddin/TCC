import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesasPage } from './mesas.page';

const routes: Routes = [
  {
    path: '',
    component: MesasPage
  },
  {
    path: 'detalhes',
    loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesasPageRoutingModule {}
