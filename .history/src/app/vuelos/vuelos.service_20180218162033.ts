import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelos/vuelo.model';

@Injectable()
export class UsuariosService {
  // api = 'http://jsonplaceholder.typicode.com/users';
  api = 'assets/usuarios.json';
  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getUsuario() {
    // return this.http.get('api/Usuarios').toPromise();
    return this.http.get(this.api).toPromise();
  }

  grabar(usuario: Usuario) {
    return this.http.post(this.api,
      JSON.stringify(usuario),
      { headers: this.header }).toPromise();
  }

}
