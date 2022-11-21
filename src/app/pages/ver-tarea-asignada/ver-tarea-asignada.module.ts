import { NgModule } from '@angular/core';

import { VerTareaAsignadaPageRoutingModule } from './ver-tarea-asignada-routing.module';

import { VerTareaAsignadaPage } from './ver-tarea-asignada.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    VerTareaAsignadaPageRoutingModule
  ],
  declarations: [VerTareaAsignadaPage]
})
export class VerTareaAsignadaPageModule {}
