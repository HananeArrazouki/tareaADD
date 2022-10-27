import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerTareaAsignadaPage } from './ver-tarea-asignada.page';

const routes: Routes = [
  {
    path: '',
    component: VerTareaAsignadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerTareaAsignadaPageRoutingModule {}
