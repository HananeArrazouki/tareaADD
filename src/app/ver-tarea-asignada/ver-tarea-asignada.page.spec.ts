import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerTareaAsignadaPage } from './ver-tarea-asignada.page';

describe('VerTareaAsignadaPage', () => {
  let component: VerTareaAsignadaPage;
  let fixture: ComponentFixture<VerTareaAsignadaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTareaAsignadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerTareaAsignadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
