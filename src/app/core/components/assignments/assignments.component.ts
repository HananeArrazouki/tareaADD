import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Assignment } from '../../interfaces/assignment';
import { Persona } from '../../interfaces/persona';
import { Tarea } from '../../interfaces/tarea';
import { AssignmentService } from '../../services/assignment.service';
import { PersonasService } from '../../services/personas.service';
import { TareaService } from '../../services/tareas.service';
import { isLowResolution as lowres }  from '../../utils/screen';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})
export class AssignmentsComponent {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  _assignment: Assignment;

  @Input() set assignment(a:Assignment){
    this._assignment = a;
  }

  get assignment(){
    return this._assignment;
  }
  
  isLowResolution = lowres;
  constructor(
    private personas: PersonasService, 
    private tareasServicio: TareaService, 
    private asignaciones: AssignmentService)
    {  }


  getTarea():Tarea{
    var tareaId = this.assignment.tareaId;
    if(tareaId) 
        return this.tareasServicio.getTareaById(tareaId);
    return undefined;
  }

  getPersona():Persona{
    var personaId = this.assignment.personaId;
    if(personaId)
      return this.personas.getPersonaById(personaId);
    return undefined;
  }

  onEditClick(slide:IonItemSliding){
    slide.close();
    this.onEdit.emit(this.assignment);
  }

  onDeleteClick(slide:IonItemSliding){
    slide.close();
    this.onDelete.emit(this.assignment);
  }

}

