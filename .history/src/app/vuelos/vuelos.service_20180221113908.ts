import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Vuelo } from '../modelos/vuelo.model';

@Injectable()
export class VuelosService {
  api = 'http://localhost:2021/get.vuelos';
  // api = 'assets/vuelos.json';
  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getVuelo() {
    return this.http.get(this.api).toPromise();
  }

  reservar(data: Object) {
    console.log(data);

    // return this.http.post('http://localhost:2021/post.reservar', { data: JSON.stringify(data) }).toPromise();

    const params = new HttpParams().set('data', JSON.stringify(data));
    return this.http.get('http://localhost:2021/post.reservar', { params: params }).toPromise();
  }

}
