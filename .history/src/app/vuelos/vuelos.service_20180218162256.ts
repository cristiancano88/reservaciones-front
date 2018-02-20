import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vuelos } from '../modelos/vuelo.model';

@Injectable()
export class VuelosService {
  api = 'assets/vuelos.json';
  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getUsuario() {
    return this.http.get(this.api).toPromise();
  }

  grabar(vuelo: Vuelos) {
    return this.http.post(this.api,
      JSON.stringify(vuelo),
      { headers: this.header }).toPromise();
  }

}
