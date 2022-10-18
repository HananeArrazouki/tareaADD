import { Component, Input, OnInit } from '@angular/core';
import { PersonasService } from '../personas/personas.service';
import { Persona } from '../interfaces/persona';

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

  constructor(private servicio : PersonasService) { }

  ngOnInit() {}
  
  getPersonas(){
    return this.servicio.getPersonas();
  }
  deletePersonById(id: number){
    console.log(id)
    return this.servicio.deletePersonById(id)
  }
}
