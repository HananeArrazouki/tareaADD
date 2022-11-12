import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './pages/home/home.page';
import { HomePageModule } from './pages/home/home.module';
import { MainMenuComponent } from './core/components/main-menu/main-menu.component';
import { FormAssignmentComponent } from './core/components/form-assignment/form-assignment.component';
import { PersonSelectableComponent } from './core/components/person-selectable/person-selectable.component';
import { TaskSelectableComponent } from './core/components/task-selectable/task-selectable.component';
import { DateTimeSelectableComponent } from './core/components/date-time-selectable/date-time-selectable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, 
    MainMenuComponent, 
    ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
