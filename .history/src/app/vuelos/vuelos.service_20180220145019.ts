import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Vuelo } from '../modelos/vuelo.model';

@Injectable()
export class VuelosService {
  api = '/get.vuelos';
  // api = 'assets/vuelos.json';
  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getVuelo() {
    return this.http.get(this.api).toPromise();
  }

  grabar(vuelo: Vuelo) {
    return this.http.post(this.api,
      JSON.stringify(vuelo),
      { headers: this.header }).toPromise();
  }

  reservar(data: Object) {
    console.log(data);

    const params = new HttpParams().set('data', JSON.stringify(data));
    return this.http.post('http://localhost:2021/reservar', { params: params }).toPromise();
  }

}
