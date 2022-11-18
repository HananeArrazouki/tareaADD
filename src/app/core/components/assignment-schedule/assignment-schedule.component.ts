import { Component, Input} from '@angular/core';
import { Assignment } from '../../interfaces/assignment';
import { Persona } from '../../interfaces/persona';
import { Tarea } from '../../interfaces/tarea';
import { PersonasService } from '../../services/personas.service';
import { TareaService } from '../../services/tareas.service';

@Component({
  selector: 'app-assignment-schedule',
  templateUrl: './assignment-schedule.component.html',
  styleUrls: ['./assignment-schedule.component.scss'],
})
export class AssignmentScheduleComponent {

  @Input() assignment: Assignment
  constructor(
    private peopleService: PersonasService,
    private taskService: TareaService
  ) { }

  getTask():Tarea{
    var taskId = this.assignment.tareaId
    if(taskId){
      return this.taskService.getTareaById(taskId);
    }
    return undefined
  }

  getPerson(): Persona {
    var personId = this.assignment.personaId;
    if(personId) {
      return this.peopleService.getPersonaById(personId);
    }
    return undefined;
  }
    
}
