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
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let myParams = new URLSearchParams();
    myParams.append('cedula', cedula);
    const options = { headers: myHeaders, params: myParams };
    return this.http.get(this.api, options).toPromise();
  }
}
