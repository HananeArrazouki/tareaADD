import { Component} from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { PersonFormComponent } from '../../core/components/form-person/form-person.component';
import { Persona } from '../../core/interfaces/persona';
import { AssignmentService } from 'src/app/core/services/assignment.service';
import { PersonasService } from '../../core/services/personas.service'
import { isLowResolution } from 'src/app/core/utils/screen';
import { Assignment } from 'src/app/core/interfaces/assignment';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage{

  isLowRes = isLowResolution
  mode: "Normal" | "Edit" = "Normal";

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

  onNewPerson(){
    this.presentPersonForm(null)
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

}
