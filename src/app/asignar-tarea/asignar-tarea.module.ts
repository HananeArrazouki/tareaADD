import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarTareaPageRoutingModule } from './asignar-tarea-routing.module';

import { AsignarTareaPage } from './asignar-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarTareaPageRoutingModule
  ],
  declarations: [AsignarTareaPage]
})
export class AsignarTareaPageModule {}
