import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonasPageRoutingModule } from './personas-routing.module';
import { PersonasPage } from './personas.page';
import { PersonaComponent } from '../../core/components/persona/persona.component';
import { PersonFormComponent } from '../../core/components/form-person/form-person.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonasPageRoutingModule
  ],
  declarations: [PersonasPage, PersonaComponent, PersonFormComponent]
})
export class PersonasPageModule {}
