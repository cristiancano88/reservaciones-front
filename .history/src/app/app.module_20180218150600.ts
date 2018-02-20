import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsuariosService } from './usuarios/usuarios.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { NotificationService } from './shared/notification/notification.service';
import { VariableService } from './shared/variable.service';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    VuelosComponent,
    MisReservasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NotificationService,
    UsuariosService,
    VariableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
