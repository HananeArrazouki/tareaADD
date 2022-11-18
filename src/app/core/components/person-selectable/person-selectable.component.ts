import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { Persona } from '../../interfaces/persona';
import { PersonasService } from '../../services/personas.service';

const PERSON_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PersonSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-person-selectable',
  templateUrl: './person-selectable.component.html',
  styleUrls: ['./person-selectable.component.scss'],
  providers: [PERSON_PROFILE_VALUE_ACCESSOR]
})
export class PersonSelectableComponent  implements ControlValueAccessor{

  personSelected: Persona = null;
  isDisabled: boolean = false;
  propagateChange = (_:any) => { }

  constructor(
    private personService: PersonasService
  ) { }

  /**
   * Receives the formControllerName used in the component tag
   * @param personId ID of the person received by the assignment form
   */
  writeValue(personId: any): void {
    this.personSelected = this.personService.getPersonaById(personId)
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getPeopleList() {
    return this.personService.getPersonas();
  }

  onPersonClick(person: Persona, accordion: IonAccordionGroup) {
    this.personSelected = person;
    accordion.value = '';
    this.propagateChange(this.personSelected.id); 
  }


}
