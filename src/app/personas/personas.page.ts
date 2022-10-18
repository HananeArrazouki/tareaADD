import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service'
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../interfaces/persona';
import { ModalController } from '@ionic/angular';
import { PersonFormComponent } from '../components/form-person/form-person.component';


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

}
