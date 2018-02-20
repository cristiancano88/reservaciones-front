import { RegistroComponent } from './registro/registro.component';
import { Route } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

export const RouterConfig: Route[] = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'vuelos', component: VuelosComponent},
  {path: 'mis-reservas', component: MisReservasComponent},
  {path: '', redirectTo: 'usuario', pathMatch: 'full'}, // pagina por defecto es home
  {path: '**', redirectTo: 'usuario'}, // si ingresan una url extraña, la app se redirige a usuario
];
