import { NgModule } from '@angular/core';
import { TareasPageRoutingModule } from './tareas-routing.module';
import { TareasPage } from './tareas.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    TareasPageRoutingModule
  ],
  declarations: [TareasPage]
})
export class TareasPageModule {}
