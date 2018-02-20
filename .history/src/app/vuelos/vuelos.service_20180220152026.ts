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

  reservar(data: Object) {
    console.log(data);

    // const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    // const params = new HttpParams().set('data', JSON.stringify(data));
    return this.http.post('post.reservar', { data: JSON.stringify(data) }).toPromise();
    // return this.http.post('assets/vuelos.json', { params: params }, {headers: myheader}).toPromise();
    // return this.http.post('/post.reservar', { params: params }, {headers: myheader}).toPromise();
}

}
