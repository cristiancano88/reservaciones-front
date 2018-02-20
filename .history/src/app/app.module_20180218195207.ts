import { RouterConfig } from './router.config';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsuariosService } from './usuarios/usuarios.service';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { NotificationService } from './shared/notification/notification.service';
import { VariableService } from './shared/variable.service';
import { MenuComponent } from './shared/menu/menu.component';
import { VuelosService } from './vuelos/vuelos.service';
import { MisReservasService } from './mis-reservas/mis-reservas.service';


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
    HttpClientModule,
    // AppRoutingModule
  ],
  providers: [
    NotificationService,
    UsuariosService,
    VuelosService,
    VariableService,
    MisReservasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
