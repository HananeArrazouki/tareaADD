import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssignmentsComponent } from './components/assignments/assignments.component';
import { FormAssignmentComponent } from './components/form-assignment/form-assignment.component';

import { PersonaComponent } from './components/persona/persona.component';
import { PersonSelectableComponent } from './components/person-selectable/person-selectable.component';
import { PersonFormComponent } from './components/form-person/form-person.component';

import { TaskSelectableComponent } from './components/task-selectable/task-selectable.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormTareaComponent } from './components/form-tarea/form-tarea.component';

import { DateTimeSelectableComponent } from './components/date-time-selectable/date-time-selectable.component';

@NgModule({
  declarations: [
        FormAssignmentComponent,
        FormTareaComponent,
        PersonFormComponent,
        DateTimeSelectableComponent,
        PersonSelectableComponent,
        TaskSelectableComponent,
        PersonaComponent,
        TareaComponent,
        AssignmentsComponent
      ],
  imports: [
    CommonModule, 
    IonicModule.forRoot(), 
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PersonaComponent,
    PersonFormComponent,
    PersonSelectableComponent,
    TareaComponent,
    FormTareaComponent,
    TaskSelectableComponent,   
    DateTimeSelectableComponent,
    AssignmentsComponent,
    FormAssignmentComponent
  ]
})
export class CoreModule { }
