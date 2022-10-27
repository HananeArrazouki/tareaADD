import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../core/services/personas.service'
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../../core/interfaces/persona';
import { ModalController } from '@ionic/angular';
import { PersonFormComponent } from '../../core/components/form-person/form-person.component';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {
   private personas = []
  constructor(private servicio : PersonasService, private modalController: ModalController) { }

  ngOnInit() {
  }

  getPersonas(){
    return this.servicio.getPersonas();
  }

  addPerson(person: Persona) {
    this.servicio.addPerson(person)
  }
  async presentPersonForm(persona:Persona){
    const modalController = await this.modalController.create({
      component: PersonFormComponent,
      componentProps:{
        persona:persona
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.servicio.addPerson(result.data.persona);
            break;
          case 'Edit':
            this.servicio.actualizarPerson(result.data.persona);
            break;
          default:
        }
      }
    });
  }

  
  onNewPerson(){
    this.presentPersonForm(null)
  }

}
