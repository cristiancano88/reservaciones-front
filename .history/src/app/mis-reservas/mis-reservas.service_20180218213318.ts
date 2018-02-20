import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, RequestOptions } from '@angular/common/http';
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
    const myHeaders = new HttpHeaders();
    myHeaders.append('Content-Type', 'application/json');
    const myParams = new URLSearchParams();
    myParams.append('cedula', cedula.toString();
    const options = { headers: myHeaders, params: myParams };
    return this.http.get(this.api, options).toPromise();
  }
}
