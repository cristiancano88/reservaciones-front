import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vuelo } from '../modelos/vuelo.model';

@Injectable()
export class VuelosService {
  api = 'assets/vuelos.json';
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

  reservar(cedula: string) {
    console.log(cedula);
    // const myHeaders = new HttpHeaders();
    // myHeaders.append('Content-Type', 'application/json');
    // const myParams = new HttpParams();
    // myParams.append('cedula', cedula);
    // const options = { headers: myHeaders, params: myParams };
    // return this.http.get('/getReservasByCedula', options).toPromise();

    const params = new HttpParams().set('cedula', cedula);
    return this.http.get(this.api, { params: params }).toPromise();
    // return this.http.get('/getReservasByCedula', { params: params }).toPromise();
  }

}
