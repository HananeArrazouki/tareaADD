import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

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
