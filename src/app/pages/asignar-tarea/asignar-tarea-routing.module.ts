import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarTareaPage } from './asignar-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarTareaPageRoutingModule {}
