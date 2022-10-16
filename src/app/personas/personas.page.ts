import { Component, OnInit } from '@angular/core';
import { PersonasService } from './personas.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {
   private personas = []
  constructor(private servicio : PersonasService) { }

  ngOnInit() {
  }
  
  getPersonas(){
    return this.servicio.getPersonas();
  }

}
