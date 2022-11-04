import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FormAssignmentComponent } from 'src/app/core/components/form-assignment/form-assignment.component';
import { Assignment } from 'src/app/core/interfaces/assignment';
import { AssignmentService } from 'src/app/core/services/assignment.service';
import { PersonasService } from 'src/app/core/services/personas.service';
import { TareaService } from 'src/app/core/services/tareas.service';

@Component({
  selector: 'app-asignar-tarea',
  templateUrl: './asignar-tarea.page.html',
  styleUrls: ['./asignar-tarea.page.scss'],
})
export class AsignarTareaPage {

  constructor(
    private assignmentService: AssignmentService, 
    private personaService: PersonasService, 
    private tareaService: TareaService,
    private alertController: AlertController,
    private modalController: ModalController) { }

  getAssignments(){
    return this.assignmentService.getAssignments();
  }
  getPersonaById(id: number){
    return this.personaService.getPersonaById(id)
  }

  getTareaById(id: number){
    return this.tareaService.getTareaById(id)
  }

  deleteAssignmentByID(id: number) {
    this.assignmentService.deleteAssignmentById(id);
  }

  onNewAssignment() {
    this.presentAssignmentForm(null);
  }

  onEditAssignment(assignment: Assignment) {
    this.presentAssignmentForm(assignment);
  }

  onDeleteAssignment(assignment: Assignment) {
    this.onDeleteAlert(assignment);
  }

  async presentAssignmentForm(assignment: Assignment) {
    const modalController = await this.modalController.create({
      component: FormAssignmentComponent,
      componentProps: {
        assignment: assignment
      }
    });
    modalController.present();
    modalController.onDidDismiss().then(result => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.assignmentService.addAssignment(result.data.assignment);
            break;
          case 'Edit':
            this.assignmentService.updateAssignment(result.data.assignment);
            break;
          default:
        }
      }
    });
  }

  async onDeleteAlert(assignment: Assignment) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: '¿Are you sure you want to delete this assignment?',
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
            this.deleteAssignmentByID(assignment.id)
          },
        },
      ],
    });
    await alert.present();
  }
}
