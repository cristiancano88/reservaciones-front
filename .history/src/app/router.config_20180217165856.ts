import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
export const RouterConfig: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'vuelos', component: RegistroComponent},
  {path: 'registrarse', component: SignupFormComponent},
  {path: '', redirectTo: 'usuario', pathMatch: 'full'}, // pagina por defecto es home
  {path: '**', redirectTo: 'usuario'}, // si ingresan una url extraña, la app se redirige a usuario
];