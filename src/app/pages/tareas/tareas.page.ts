import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { FormTareaComponent } from '../../core/components/form-tarea/form-tarea.component';
import { Tarea } from '../../core/interfaces/tarea';
import { AssignmentService } from 'src/app/core/services/assignment.service';
import { TareaService } from '../../core/services/tareas.service';
import { isLowResolution } from 'src/app/core/utils/screen';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {

  isLowRes = isLowResolution
  mode: "Normal" | "Edit" = "Normal";

  constructor(
    private taskService : TareaService,
    private assignmentService : AssignmentService,
    private alertController : AlertController,
    private modalController: ModalController) { }
  
  getListaTarea(){
    return this.taskService.listaTareas$;
  }

  getTareaById(id : number){
    return this.taskService.getTareaById(id);
  }

  addTarea(tarea: Tarea) {
    this.taskService.addTarea(tarea)
  }

  deleteTaskById(id : number){
    return this.taskService.deleteTareaByID(id);
  }

  async presentTareaForm(tarea:Tarea){
    const modalController = await this.modalController.create({
      component: FormTareaComponent,
      componentProps:{
        tarea : tarea
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

  
  async onDelete(tarea : Tarea) {
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
            this.deleteTaskById(tarea.id)
          },
        },
      ],
    });

    await alert.present();
  }
  async onTaskExistsAlert(person) {
    const alert = await this.alertController.create({
      header: 'ADVERTENCIA',
      message: 'No se puede borrar esa persona porque tiene tarea asignada',
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

  onNewTarea(){
    this.presentTareaForm(null)
  }

  onEditTask(task : Tarea){
    this.presentTareaForm(task)
  }

  onDeleteTask(task : Tarea){
    if(!this.onTaskExistsAlert(task.id)){
      this.onDelete(task)
    }else{
      this.onTaskExistsAlert(task)
    }
  }

}
