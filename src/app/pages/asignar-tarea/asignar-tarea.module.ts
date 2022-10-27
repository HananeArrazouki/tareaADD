import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AsignarTareaPageRoutingModule } from './asignar-tarea-routing.module';
import { AsignarTareaPage } from './asignar-tarea.page';
import { AssignmentsComponent } from 'src/app/core/components/assignments/assignments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarTareaPageRoutingModule
  ],
  declarations: [AsignarTareaPage, AssignmentsComponent]
})
export class AsignarTareaPageModule {}
