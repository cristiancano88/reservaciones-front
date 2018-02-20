import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelos/usuario.model';

@Injectable()
export class MisReservasService {
  api = 'assets/usuarios.json';
  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getUsuario() {
    return this.http.get(this.api).toPromise();
  }

  getReservasByCedula(cedula: number) {
    return this.http.get(this.api).toPromise();
  }
}
