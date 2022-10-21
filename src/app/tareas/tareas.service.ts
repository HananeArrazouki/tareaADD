import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  
    private _listaTarea: Tarea[] = [
      {id:1, nombre:'Tarea1', tiempo:100, img:'https://drive.google.com/uc?export=view&id=1sCLNSUDkn0lg_r828_Vq-JgcUvD064PF'},
      {id:2, nombre:'Tarea2', tiempo:200, img:'https://drive.google.com/uc?export=view&id=1tUXTrbdqY573NuJP4tGnmRxb-U2hZ7Zn'},
      {id:3, nombre:'Tarea3', tiempo:300},
      {id:4, nombre:'Tarea4', tiempo:400},
      {id:5, nombre:'Tarea5', tiempo:500}
    ];

    constructor() { }

    id: number = this._listaTarea.length+1;

    public getListaTarea() {
      return this._listaTarea;
   }

    public getPersonasById(id:number): Tarea {
      return this._listaTarea[id];
    }

  addTarea(tarea: Tarea) {
    tarea.id = this.id++;
    this._listaTarea.push(tarea)
  }
  deleteTareaByID(id: number){
    this._listaTarea = this._listaTarea.filter(p => p.id != id)
  }
  actualizarTarea(tarea: Tarea){
    var tareaActualizada = this._listaTarea.find(p => p.id == tarea.id)
    tareaActualizada.nombre = tarea.nombre
    tareaActualizada.tiempo = tarea.tiempo
  }

}
