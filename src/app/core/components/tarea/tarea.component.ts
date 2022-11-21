import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../interfaces/tarea';
import { TareaService } from '../../services/tareas.service';
import { AlertController, ModalController } from '@ionic/angular';
import { FormTareaComponent } from '../form-tarea/form-tarea.component';
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent implements OnInit {

  
  private _tarea : Tarea
   
  @Input() tarea: Tarea

  constructor(
    private taskService : TareaService, 
    private assignmentService: AssignmentService,
    private alertController: AlertController, 
    private modalController: ModalController) { }

  ngOnInit() {}
  
  getListaTarea(){
    return this.taskService.getListaTarea();
  }
  deleteTareaById(id: number){
    console.log(id)
    return this.taskService.deleteTareaByID(id)
  }

  async onDelete(tarea) {
    const alert = await this.alertController.create({
      header: '¿Are you sure you want to delete ' + tarea.nombre + '?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.hasAssignedPerson(tarea)
            this.onTaskAssignedAlert(tarea)
          },
        },
      ],
    });
    await alert.present();
  }

  async presentTareaForm(tarea : Tarea){
    const modalController = await this.modalController.create({
      component: FormTareaComponent,
      componentProps:{
        tarea: tarea
      }
    });

    modalController.present();

    modalController.onDidDismiss().then(result => {
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.taskService.addTarea(result.data.tarea);
            break;
          case 'Edit':
            this.taskService.actualizarTarea(result.data.tarea);
            break;
          default:
        }
      }
    });
  }

  onDeleteTarea(tarea : Tarea) {
    this.onDelete(tarea)
  }
  onEditTarea(tarea: Tarea){
    this.presentTareaForm(tarea)
  }

  // onTaskClick(task: Tarea, accordion: IonAccordionGroup) {
  //   this._tarea = task;
  //   accordion.value = '';
  //   this.propagateChange(this._tarea.id); 
  // }


  hasAssignedPerson(taskId: number): boolean{
    if(this.assignmentService.getAssignments().find(asig => asig.personaId == taskId)){
      return true
    }else {
      return false
    }   
  }

  // onDeleteTask(task : Tarea) {
  //   if (!this.hasAssignedPerson(task.id)) {
  //     this.onDelete(task);
  //   } else {
  //     this.onTaskAssignedAlert(task);
  //   }
  // }

  async onTaskAssignedAlert(person) {
    const alert = await this.alertController.create({
      header: 'ADVERTENCIA',
      message: 'No se puede borrar esa tarea porque esta asignada a una persona',
      buttons: [
        {
          text: 'Cerrar',
          role: 'close',
          handler: () => { },
        },
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }
}
