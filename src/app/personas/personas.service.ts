import { Injectable } from '@angular/core';

export interface Persona{
  nombre : string;
  apellido : string;
  edad : number;
  id : number;
  apodo? : string;
  img? : string;
}
//https://drive.google.com/drive/folders/1J3iLf3BvtlIFGyvSL_o_nZtj01x-2WNR?usp=sharing

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  
  public persona: Persona[] = [
    {nombre: 'Hanane', apellido: 'Arrazouki', edad: 23, id: 1, apodo: 'Baka'},
    {nombre: 'Sergio', apellido: 'García', edad: 23, id: 2, apodo: 'SeryiDev'},
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
