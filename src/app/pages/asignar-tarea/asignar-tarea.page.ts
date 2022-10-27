import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/core/interfaces/assignment';
import { AssignmentService } from 'src/app/core/services/assignment.service';
import { PersonasService } from 'src/app/core/services/personas.service';
import { TareaService } from 'src/app/core/services/tareas.service';

@Component({
  selector: 'app-asignar-tarea',
  templateUrl: './asignar-tarea.page.html',
  styleUrls: ['./asignar-tarea.page.scss'],
})
export class AsignarTareaPage implements OnInit {

  constructor(private assignmentService: AssignmentService, private personaService: PersonasService, private tareaService: TareaService) { }

  ngOnInit() {}

  getAssignments(){
    return this.assignmentService.getAssignments();
  }
  getPersonaById(id: number){
    return this.personaService.getPersonaById(id)
  }

  getTareaById(id: number){
    return this.tareaService.getTareaById(id)
  }
}
