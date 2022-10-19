import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Persona } from 'src/app/interfaces/persona';


@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss'],
})
export class PersonFormComponent {

  form: FormGroup;
  mode: "New" | "Edit" = "New";

  @Input('persona') set persona(persona: Persona) {
    if (persona) {
      this.form.controls.id.setValue(persona.id);
      this.form.controls.nombre.setValue(persona.nombre);
      this.form.controls.apellido.setValue(persona.apellido);
      this.form.controls.edad.setValue(persona.edad);
      this.form.controls.apodo.setValue(persona.apodo);
      this.form.controls.img.setValue(persona.img);
      this.mode = "Edit";
    }
  }

  constructor(private formBuilder: FormBuilder, private modalController: ModalController) {
    this.form = this.formBuilder.group({
      id: [null],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      apodo: ['', [Validators.required]],
      img: ['']
    });
  }
 
  onSubmit() {
    this.modalController.dismiss({ persona: this.form.value, mode: this.mode });
  }

  onDismiss() {
    this.modalController.dismiss();
  }
}
