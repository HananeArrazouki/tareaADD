import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private _personas: Persona[] = [
    {
      nombre: 'Hanane', 
      apellido: 'Arrazouki', 
      edad: 23, 
      id: 1, 
      apodo: 'Hanane', 
      img: "https://drive.google.com/uc?export=view&id=1fwC6d36RvxL2D8H9QRPvS3bvpjaHvXcA"
    },
    {nombre: 'Sergio', apellido: 'García', edad: 23, id: 2, apodo: 'SerYi', img:"https://drive.google.com/uc?export=view&id=1UkA8bmQt0sIkjMSMGb1BR2AnduYRTaHJ"},
    {nombre: 'Verónica', apellido: 'González', edad:19, id: 3, apodo: 'Vero', img:''},
    {nombre: 'Natalia', apellido: 'Castillo', edad:45, id: 4, apodo: 'Naty', img:''},
    {nombre: 'Alejandro', apellido: 'Santos', edad:20, id: 5, apodo: 'Alex', img:''}    
 ];
 constructor() { }
 
 private _personasSubject: BehaviorSubject<Persona[]> = new BehaviorSubject(this._personas)
 public listaPersonas$ = this._personasSubject.asObservable();
 id: number = this._personas.length+1;

 public getPersonas():Persona[] {
    return this._personas;
 }
 public getPersonaById(id:number): Persona {
    return this._personas.find(p=>p.id==id);
 }

  addPerson(persona: Persona) {
    persona.id = this.id++;
    this._personas.push(persona)
    this._personasSubject.next(this._personas)
  }
  deletePersonById(id: number){
    this._personas = this._personas.filter(p => p.id != id)
    this._personasSubject.next(this._personas)
  }
  actualizarPerson(persona: Persona){
    var personaActualizada = this._personas.find(p => p.id == persona.id)
    if(personaActualizada){
      personaActualizada.nombre = persona.nombre
      personaActualizada.apellido = persona.apellido
      personaActualizada.apodo = persona.apodo
      personaActualizada.img = persona.img
    }   
    this._personasSubject.next(this._personas)
  }
  
}