import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuselajeComponent } from './components/fuselaje/fuselaje.component';
import { APP_ROUTES } from './app.routes';
import { MotorComponent } from './components/motor/motor.component';
import { CabinaComponent } from './components/cabina/cabina.component';
import { ControlComponent } from './components/control/control.component';
import { PlanetasComponent } from './components/planetas/planetas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FuselajeComponent,
    MotorComponent,
    CabinaComponent,
    ControlComponent,
    PlanetasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
