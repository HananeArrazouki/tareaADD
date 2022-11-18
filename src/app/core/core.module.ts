import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
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
import es from '@angular/common/locales/es'
import en from '@angular/common/locales/en'
import { AssignmentScheduleComponent } from './components/assignment-schedule/assignment-schedule.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { createTranslateLoader } from './utils/translate';



registerLocaleData(es)
registerLocaleData(en)

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
        AssignmentsComponent,
        AssignmentScheduleComponent
      ],
  imports: [
    CommonModule, 
    IonicModule.forRoot(), 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
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
    FormAssignmentComponent,
    AssignmentScheduleComponent,
    HttpClientModule,
    TranslateModule
  ],
  providers:[
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'en'
    // },
  ]
})
export class CoreModule { }
