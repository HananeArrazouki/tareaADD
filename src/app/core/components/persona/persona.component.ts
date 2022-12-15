import { Component, Input} from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../interfaces/persona';
import { AlertController, IonAccordionGroup, ModalController } from '@ionic/angular';
import { PersonFormComponent } from '../form-person/form-person.component';
import { AssignmentService } from '../../services/assignment.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],
})
export class PersonaComponent{

  private _persona : Persona
  propagateChange = (_:any) => { }

  @Input('personas') set persona(persona: Persona){
    this._persona= persona;
  }

  get persona(){
    return this._persona;
  }

  constructor(
    private personService : PersonasService, 
    private assignmentService : AssignmentService,
    private alertController: AlertController, 
    private modalController: ModalController) { }

  
  getPersonas(){
    return this.personService.getPersonas();
  }
  deletePersonById(id: number){
    console.log(id)
    return this.personService.deletePersonById(id)
  }

  onDeletePeaple(person: Persona){
    this.onDelete(person)
  }

  async onDelete(persona) {
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
            this.hasAssignedTask(persona.id)
            this.onPersonAssignedAlert(persona)
          },
        },
      ],
    });

    await alert.present();
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

  onEditPerson(persona: Persona){
    this.presentPersonForm(persona)
  }

  onPersonClick(person: Persona, accordion: IonAccordionGroup) {
    this._persona = person;
    accordion.value = '';
    this.propagateChange(this._persona.id); 
  }


  hasAssignedTask(personId: number): boolean{
    if(this.assignmentService.getAssignments().find(asig => asig.personaId == personId)){
      return true
    }else {
      return false
    }   
  }

  onDeletePerson(person: Persona) {
    if (!this.hasAssignedTask(person.id)) {
      this.onDelete(person);
    } else {
      this.onPersonAssignedAlert(person);
    }
  }

  async onPersonAssignedAlert(person) {
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

  
}
