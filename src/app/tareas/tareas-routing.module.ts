import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasPage } from './tareas.page';

const routes: Routes = [
  {
    path: '',
    component: TareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TareasPageRoutingModule {}
