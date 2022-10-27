import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Tarea } from 'src/app/core/interfaces/tarea';

@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.scss'],
})
export class FormTareaComponent {

 
  form: FormGroup;
  mode: "New" | "Edit" = "New";

  @Input('tarea') set tarea(tarea: Tarea) {
    if (tarea) {
      this.form.controls.id.setValue(tarea.id);
      this.form.controls.nombre.setValue(tarea.nombre);
      this.form.controls.tiempo.setValue(tarea.tiempo);
      this.form.controls.img.setValue(tarea.img);
      this.mode = "Edit";
    }
  }

  constructor(private formBuilder: FormBuilder, private modalController: ModalController) {
    this.form = this.formBuilder.group({
      id: [null],
      nombre: ['', [Validators.required]],
      tiempo: ['', [Validators.required]],
      img: ['']
    });
  }
 
  onSubmit() {
    this.modalController.dismiss({ tarea: this.form.value, mode: this.mode });
  }

  onDismiss() {
    this.modalController.dismiss();
  }

}
