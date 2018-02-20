import { Component, OnInit } from '@angular/core';
import { MisReservasService } from './mis-reservas.service';
import { Usuario } from '../modelos/usuario.model';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.scss']
})
export class MisReservasComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario;
  constructor(private usuarioSrv: MisReservasService) {
    this.usuarioSrv.getUsuario()
    .then((d: Usuario[]) => {
        const cedulas: number[] = [];
        d.forEach(obj => {
          cedulas.push(obj.cedula);
        });


        console.log(cedulas);
        this.cedulas = cedulas.join(', ');
    });
  }

  ngOnInit() {
  }

}
