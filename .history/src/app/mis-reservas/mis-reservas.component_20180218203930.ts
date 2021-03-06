import { Component, OnInit } from '@angular/core';
import { MisReservasService } from './mis-reservas.service';
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
  listCedulas: string;
  usuario: Usuario;
  constructor(
    private usuarioSrv: MisReservasService,
    private fb: FormBuilder
  ) {
    this.usuarioSrv.getUsuario()
    .then((d: Usuario[]) => {
        const cedulas: number[] = [];
        d.forEach(obj => {
          cedulas.push(obj.cedula);
        });


        console.log(cedulas);
        this.listCedulas = cedulas.join(', ');
    });

    this.frmCedula = this.fb.group({
      'cedula': ['', Validators.required]
    });
  }

  getReservas() {
    const frm = this.frmRegistro.value;
    const objUsuario: Usuario = new Usuario();
    objUsuario.email = frm.email;
    objUsuario.name = frm.nombre;
    objUsuario.clave = frm.clave;

    this.usuarioSrv.grabar(objUsuario)
    .then();
  }

  ngOnInit() {
  }

}
