import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Usuario } from '../modelos/usuario.model';

@Injectable()
export class MisReservasService {
  api = 'http://localhost:8080/get.users';
  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getUsuario() {
    return this.http.get(this.api).toPromise();
  }

  getReservasByCedula(cedula: string) {
    console.log(cedula);
    // const myHeaders = new HttpHeaders();
    // myHeaders.append('Content-Type', 'application/json');
    // const myParams = new HttpParams();
    // myParams.append('cedula', cedula);
    // const options = { headers: myHeaders, params: myParams };
    // return this.http.get('/getReservasByCedula', options).toPromise();

    const params = new HttpParams().set('cedula', cedula);
    return this.http.get('http://localhost:8080/get.reservasByCedula', { params: params }).toPromise();
    // return this.http.get('/getReservasByCedula', { params: params }).toPromise();
  }
}
