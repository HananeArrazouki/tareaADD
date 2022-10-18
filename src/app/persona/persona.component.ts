import { Component, Input, OnInit } from '@angular/core';
import { PersonasService } from '../personas/personas.service';
import { Persona } from '../interfaces/persona';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonFormComponent } from '../components/form-person/form-person.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent implements OnInit {

  private _persona : Persona
   
  @Input('personas') set persona(persona: Persona){
    this._persona= persona;
  }

  get persona(){
    return this._persona;
  }

  constructor(private servicio : PersonasService, private alertController: AlertController, private modalController: ModalController) { }

  ngOnInit() {}
  
  getPersonas(){
    return this.servicio.getPersonas();
  }
  deletePersonById(id: number){
    console.log(id)
    return this.servicio.deletePersonById(id)
  }

  async onDelete(persona: Persona) {
    const alert = await this.alertController.create({
      header: '¿Are you sure you want to delete ' + persona.nombre + '?',
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
            this.deletePersonById(persona.id)
          },
        },
      ],
    });

    await alert.present();
  }
  async presentPersonForm(person:Persona){
    const modalController = await this.modalController.create({
      component: PersonFormComponent,
      componentProps:{
        person:person
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.servicio.addPerson(result.data.person);
            break;
          case 'Edit':
            this.servicio.actualizarPerson(result.data.person);
            break;
          default:
        }
      }
    });
  }

  onNewPerson(){
    this.presentPersonForm(null)
  }
  onEditPerson(persona: Persona){
    this.presentPersonForm(persona)
  }
}
