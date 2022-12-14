import { Injectable } from '@angular/core';
import { Assignment } from '../interfaces/assignment';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  momentjs:any = moment;
  
    private _assignments: Assignment[] = [
      {
        id: 1, 
        personaId: 1, 
        tareaId:1, 
        crearAt: this.momentjs().toISOString(), 
        dateTime: this.momentjs().add(1, 'days').toISOString()
      },
      {
        id: 2, 
        personaId: 2, 
        tareaId: 1, 
        crearAt: this.momentjs().toISOString(), 
        dateTime: this.momentjs().add(1, 'days').toISOString()
      },
      {
        id: 3, 
        personaId: 3, 
        tareaId: 3, 
        crearAt: this.momentjs().toISOString(), 
        dateTime: this.momentjs().add(1, 'days').toISOString()
      },
      {
        id: 4, 
        personaId: 4, 
        tareaId: 4, 
        crearAt: this.momentjs().toISOString(), 
        dateTime: this.momentjs().add(1, 'days').toISOString()
      },
      {
        id: 5, 
        personaId: 5, 
        tareaId: 5, 
        crearAt: this.momentjs().toISOString(), 
        dateTime: this.momentjs().add(1, 'days').toISOString()
      },]
      
    constructor() { }
    
    private _assignemtSubject: BehaviorSubject<Assignment[]> = new BehaviorSubject(this._assignments)
    public listaAsignaciones$ = this._assignemtSubject.asObservable();
    id: number = this._assignments.length+1;

    getAssignments(){
      return this._assignments;
    }

    getAssignmentById(id: number){
      return this._assignments.find(a => a.id == id);
    }

    getAssignmentByTaskId(tareaId: number){
      return this._assignments.find(a => a.tareaId == tareaId)
    }

    getAssignmentByPersonId(personaId: number) {
      return this._assignments.find(a => a.personaId == personaId)
    }

    deleteAssignmentById(id: number) {
      this._assignments = this._assignments.filter(a => a.id != id);
      this._assignemtSubject.next(this._assignments)
    }

    addAssignment(assignment: Assignment) {
      assignment.id = this.id++;
      assignment.crearAt = this.momentjs().toISOString();
      this._assignments.push(assignment);
      this._assignemtSubject.next(this._assignments)
    }

    updateAssignment(assignment: Assignment){
      var _assignment = this._assignments.find(a=>a.id==assignment.id);
      if(_assignment){
        _assignment.tareaId = assignment.tareaId;
        _assignment.personaId = assignment.personaId;
        _assignment.crearAt = assignment.crearAt;
        _assignment.dateTime = assignment.dateTime;
    }
    this._assignemtSubject.next(this._assignments)
  }
}
