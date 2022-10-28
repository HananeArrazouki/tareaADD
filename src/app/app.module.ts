import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './pages/home/home.page';
import { HomePageModule } from './pages/home/home.module';
import { MainMenuComponent } from './core/components/main-menu/main-menu.component';


@NgModule({
  declarations: [AppComponent, MainMenuComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
