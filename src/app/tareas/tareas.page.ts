import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FormTareaComponent } from '../components/form-tarea/form-tarea.component';
import { Tarea } from '../interfaces/tarea';
import { TareaService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {

  //private tarea: []
  constructor(private servicio : TareaService, private modalController: ModalController) { }

  ngOnInit() {
  }

  
  getListaTarea(){
    return this.servicio.getListaTarea();
  }

  addTarea(tarea: Tarea) {
    this.servicio.addTarea(tarea)
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

  
  onNewTarea(){
    this.presentTareaForm(null)
  }

}
