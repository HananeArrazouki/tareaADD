import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AsignarTareaPageRoutingModule } from './asignar-tarea-routing.module';
import { AsignarTareaPage } from './asignar-tarea.page';
import { AssignmentsComponent } from 'src/app/core/components/assignments/assignments.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CoreModule,
    AsignarTareaPageRoutingModule
  ],
  declarations: [AsignarTareaPage]
})
export class AsignarTareaPageModule {}