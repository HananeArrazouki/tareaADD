import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TareasPageRoutingModule } from './tareas-routing.module';
import { TareasPage } from './tareas.page';
import { TareaComponent } from '../../core/components/tarea/tarea.component';
import { FormTareaComponent } from '../../core/components/form-tarea/form-tarea.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    TareasPageRoutingModule
  ],
  declarations: [TareasPage]
})
export class TareasPageModule {}
