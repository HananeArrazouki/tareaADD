import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  
    private _listaTarea: Tarea[] = [
      {
        id:1, 
        nombre:'Tarea1', 
        tiempo:100, 
        img:'https://drive.google.com/uc?export=view&id=1sCLNSUDkn0lg_r828_Vq-JgcUvD064PF'
      },
      {id:2, nombre:'Tarea2', tiempo:200, img:'https://drive.google.com/uc?export=view&id=1tUXTrbdqY573NuJP4tGnmRxb-U2hZ7Zn'},
      {id:3, nombre:'Tarea3', tiempo:300},
      {id:4, nombre:'Tarea4', tiempo:400},
      {id:5, nombre:'Tarea5', tiempo:500}
    ];

    constructor() { }

    private tareasSubject : BehaviorSubject<Tarea[]> =  new BehaviorSubject(this._listaTarea)
    public listaTareas$ =  this.tareasSubject.asObservable();
    id: number = this._listaTarea.length+1;

    public getListaTarea() {
      return this._listaTarea;
   }

    public getTareaById(id:number): Tarea {
      return this._listaTarea.find(t=>t.id==id);
    }

  addTarea(tarea: Tarea) {
    tarea.id = this.id++;
    this._listaTarea.push(tarea)
    this.tareasSubject.next(this._listaTarea)
  }
  deleteTareaByID(id: number){
    this._listaTarea = this._listaTarea.filter(p => p.id != id)
    this.tareasSubject.next(this._listaTarea)
  }
  actualizarTarea(tarea: Tarea){
    var tareaActualizada = this._listaTarea.find(p => p.id == tarea.id)
    if(tareaActualizada){
      tareaActualizada.nombre = tarea.nombre
      tareaActualizada.tiempo = tarea.tiempo
      tareaActualizada.img = tarea.img
    }   
    this.tareasSubject.next(this._listaTarea)
  }

}
