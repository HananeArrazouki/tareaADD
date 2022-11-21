import { NgModule } from '@angular/core';
import { PersonasPageRoutingModule } from './personas-routing.module';
import { PersonasPage } from './personas.page';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  imports: [
    CoreModule,
    PersonasPageRoutingModule
  ],
  declarations: [PersonasPage]
})
export class PersonasPageModule {}
