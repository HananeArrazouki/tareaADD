import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Tarea } from '../../interfaces/tarea';
import { TareaService } from '../../services/tareas.service';

const TASK_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TaskSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-task-selectable',
  templateUrl: './task-selectable.component.html',
  styleUrls: ['./task-selectable.component.scss'],
  providers: [TASK_PROFILE_VALUE_ACCESSOR]
})
export class TaskSelectableComponent implements ControlValueAccessor {

  taskSelected: Tarea = null;
  isDisabled: boolean = false;
  propagateChange = (_:any) => { }

  constructor(
    private taskService: TareaService
    ) { }
  
  /**
   * Receives the formControllerName used in the component tag
   * @param taskId ID of the task received by the assignment form
   */
  writeValue(taskId: any): void {
    this.taskSelected = this.taskService.getTareaById(taskId)
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getTasksList() {
    return this.taskService.getListaTarea();
  }

  onTaskClick(task: Tarea, accordion: IonAccordionGroup) {
    this.taskSelected = task;
    accordion.value = '';
    this.propagateChange(this.taskSelected.id); // Propagates the new ID
  }


}
