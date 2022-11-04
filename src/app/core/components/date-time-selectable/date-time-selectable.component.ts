import { Component, OnInit } from '@angular/core';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import { Persona } from '../../interfaces/persona';

@Component({
  selector: 'app-date-time-selectable',
  templateUrl: './date-time-selectable.component.html',
  styleUrls: ['./date-time-selectable.component.scss'],
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
