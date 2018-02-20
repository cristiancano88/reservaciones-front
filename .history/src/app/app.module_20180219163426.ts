import { RouterConfig } from './router.config';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsuariosService } from './usuarios/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { ReservarComponent } from './vuelos/reservar/reservar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotificationComponent,
    UsuariosComponent,
    VuelosComponent,
    MisReservasComponent,
    ReservarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig),
    HttpClientModule,
    ReactiveFormsModule
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
