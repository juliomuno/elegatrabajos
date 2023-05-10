import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresenciaPage } from './presencia.page';

const routes: Routes = [
  {
    path: '',
    component: PresenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenciaPageRoutingModule {}
