import { NgModule } from '@angular/core';
import { AsignarTareaPageRoutingModule } from './asignar-tarea-routing.module';
import { AsignarTareaPage } from './asignar-tarea.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    AsignarTareaPageRoutingModule
  ],
  declarations: [AsignarTareaPage]
})
export class AsignarTareaPageModule {}