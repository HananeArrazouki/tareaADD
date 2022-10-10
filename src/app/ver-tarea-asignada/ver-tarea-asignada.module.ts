import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerTareaAsignadaPageRoutingModule } from './ver-tarea-asignada-routing.module';

import { VerTareaAsignadaPage } from './ver-tarea-asignada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerTareaAsignadaPageRoutingModule
  ],
  declarations: [VerTareaAsignadaPage]
})
export class VerTareaAsignadaPageModule {}
