import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import { Persona } from '../../interfaces/persona';

const DATETIME_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimeSelectableComponent),
  multi: true
}

@Component({
  selector: 'app-date-time-selectable',
  templateUrl: './date-time-selectable.component.html',
  styleUrls: ['./date-time-selectable.component.scss'],
  providers: [DATETIME_PROFILE_VALUE_ACCESSOR]
})
export class DateTimeSelectableComponent implements OnInit {
  
  isDisabled: boolean;
  selectedDateTime: any;
  propagateChange = (_:any) => { }
  peopleSvc: any;
  personSelected: Persona = null;

  constructor() { }

  ngOnInit() {}

  writeValue(obj: any): void{
    this.selectedDateTime = obj;
  }
  serDisabledState?(isDisabled: boolean): void{
    this.isDisabled = isDisabled;
  }
 
  onDateTimeChanged(event, accordion:IonAccordionGroup){
    this.selectedDateTime = event.detail.value;
    accordion.value = '';
    this.propagateChange(this.selectedDateTime)
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  getPeople(){
    return this.peopleSvc.getPeople();
  }

  onPersonClicked(person: Persona, accordion: IonAccordionGroup){
    this.personSelected = person
    accordion.value = '';
    this.propagateChange(this.personSelected.id);
  }

  registerOnTouched(fn: any): void{}

  onCancel(datetime:IonDatetime, accordion:IonAccordionGroup){
      datetime.cancel();
  }
  onConfirm(datetime: IonDatetime, accordion){
    datetime.confirm();
  }

}
