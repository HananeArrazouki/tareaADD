import { Component} from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { PersonFormComponent } from '../../core/components/form-person/form-person.component';
import { Persona } from '../../core/interfaces/persona';
import { AssignmentService } from 'src/app/core/services/assignment.service';
import { PersonasService } from '../../core/services/personas.service'
import { isLowResolution } from 'src/app/core/utils/screen';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage{

  isLowRes = isLowResolution
  mode: "Normal" | "Edit" | "Organize" = "Normal";

  constructor(
    private personService : PersonasService,
    private assignmentService : AssignmentService,
    private alertController : AlertController, 
    private modalController: ModalController) { }

  getPersonas(){
    return this.personService.listaPersonas$;
  }

  getPeronaById(id: number){
    return this.personService.getPersonaById(id);
  }

  addPerson(person: Persona) {
    this.personService.addPerson(person)
  }

  deletePersonById(id: number){
    console.log(id)
    return this.personService.deletePersonById(id)
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
            this.personService.addPerson(result.data.persona);
            break;
          case 'Edit':
            this.personService.actualizarPerson(result.data.persona);
            break;
          default:
        }
      }
    });
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
  async onPersonExistsAlert(task) {
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

  onNewPerson(){
    this.presentPersonForm(null)
  }

  onEditPerson(person: Persona){
    this.presentPersonForm(person)
  }
  
  onDeletePerson(person: Persona) {
    if (!this.onPersonExistsAlert(person.id)) {
      this.onDelete(person);
    } else {
      this.onPersonExistsAlert(person);
    }
  }

}
