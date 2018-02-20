import { Route } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';

export const RouterConfig: Route[] = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'vuelos', component: VuelosComponent},
  {path: 'mis-reservas', component: MisReservasComponent},
  {path: '', redirectTo: 'usuario', pathMatch: 'full'}, // pagina por defecto es home
  // {path: '**', redirectTo: 'usuario'}, // si ingresan una url extraña, la app se redirige a usuario
];
