import { Vuelo } from './../modelos/vuelo.model';
import { Component, OnInit } from '@angular/core';
import { MisReservasService } from '../services/mis-reservas.service';
import { Usuario } from '../modelos/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.scss']
})
export class MisReservasComponent implements OnInit {
  frmCedula: FormGroup;

  usuarios: Usuario[];
  vuelos: Vuelo[];
  listCedulas: string;
  usuario: Usuario;
  constructor(
    private misReservasSrv: MisReservasService,
    private fb: FormBuilder
  ) {
    this.misReservasSrv.getUsuario()
      .then((d: Usuario[]) => {
        const cedulas: number[] = [];
        d.forEach(obj => {
          cedulas.push(obj.cedula);
        });

        this.listCedulas = cedulas.join(', ');
      });

    this.frmCedula = this.fb.group({
      'cedula': ['', Validators.required]
    });
  }

  getReservas() {
    const frm = this.frmCedula.value;
    const cedula: string = frm.cedula;

    this.misReservasSrv.getReservasByCedula(cedula)
      .then((resp: any) => {
        this.vuelos = resp;
      });
  }

  ngOnInit() {
  }

}
