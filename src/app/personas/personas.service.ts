import { Injectable } from '@angular/core';

export interface Persona{
  nombre : string;
  apellido : string;
  edad : number;
  id : number;
  apodo : string;
  img? : string;
}


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  public persona: Persona[] = [
    {nombre: 'Hanane', apellido: 'Arrazouki', edad: 23, id: 1, apodo: 'NO tiene', img: "https://play-lh.googleusercontent.com/M8Ynjs9CjnwtG04ilnUqzdfCvLwvZsbaCMRlL8aFx4gKWEKKef02kV1GSwm07gdmW7Kt"},
    {nombre: 'Sergio', apellido: 'García', edad: 23, id: 2, apodo: 'SeryiDev', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSxXnVvkhIxyUTgn3phii_X9n6F2dsise2g&usqp=CAU"},
    {nombre: 'Verónica', apellido: 'González', edad:19, id: 3, apodo: 'Vero'},
    {nombre: 'Natalia', apellido: 'Castillo', edad:45, id: 4, apodo: 'NO tiene'},
    {nombre: 'Alejandro', apellido: 'Santos', edad:20, id: 5, apodo: 'Alex'}    
 ];
 constructor() { }
 public getPersonas():Persona[] {
    return this.persona;
 }
 public getPersonasById(id:number): Persona {
    return this.persona[id];
 }
}
