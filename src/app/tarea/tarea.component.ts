import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
import { TareaService } from '../tareas/tareas.service';
import { AlertController, ModalController } from '@ionic/angular';
import { FormTareaComponent } from '../components/form-tarea/form-tarea.component';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
})
export class TareaComponent implements OnInit {

  
  private _tarea : Tarea
   
  @Input() tarea: Tarea

  constructor(private servicio : TareaService, private alertController: AlertController, private modalController: ModalController) { }

  ngOnInit() {}
  
  getListaTarea(){
    return this.servicio.getListaTarea();
  }
  deleteTareaById(id: number){
    console.log(id)
    return this.servicio.deleteTareaByID(id)
  }

  async onDelete(tarea: Tarea) {
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
            this.deleteTareaById(tarea.id)
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
            this.servicio.addTarea(result.data.tarea);
            break;
          case 'Edit':
            this.servicio.actualizarTarea(result.data.tarea);
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

}
