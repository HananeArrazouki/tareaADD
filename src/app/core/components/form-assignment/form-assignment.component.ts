import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assignment } from '../../interfaces/assignment';
import { AssignmentService } from '../../services/assignment.service';
import { PersonasService } from '../../services/personas.service';
import { TareaService } from '../../services/tareas.service';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.scss'],
})
export class FormAssignmentComponent {

  form:FormGroup;
  mode:"New" | "Edit" = "New";

  @Input('assignment') set assignment(assignment:Assignment){
    if(assignment){
      this.form.controls.id.setValue(assignment.id);
      this.form.controls.taskId.setValue(assignment.tareaId);
      this.form.controls.personId.setValue(assignment.personaId);
      this.form.controls.crearAt.setValue(assignment.crearAt);
      this.form.controls.dateTime.setValue(assignment.dateTime);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private tareaSvc:TareaService,
    private personasSvc:PersonasService,
    private assignmentsSvc:AssignmentService,
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      taskId:[-1, [Validators.min(1)]],
      personId:[-1, [Validators.min(1)]],
      crearAt: [''],
      dateTime:['']
    });
  }

  onSubmit(){
    this.modal.dismiss({assignment: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  onChangeDateTime(dateTime){
    this.form.controls.dateTime.setValue(dateTime.detail.value);
  }
}
