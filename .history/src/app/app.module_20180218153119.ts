import { RouterConfig } from './router.config';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsuariosService } from './usuarios/usuarios.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { NotificationService } from './shared/notification/notification.service';
import { VariableService } from './shared/variable.service';
import { MenuComponent } from './shared/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotificationComponent,
    UsuariosComponent,
    VuelosComponent,
    MisReservasComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig),
    // AppRoutingModule
  ],
  providers: [
    NotificationService,
    UsuariosService,
    VariableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
