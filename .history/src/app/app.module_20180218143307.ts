import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { VuelosComponent } from './vuelos/vuelos.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    VuelosComponentel,
    MisReservasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
